/**
 * Google Places APIから評価情報を取得してindex.htmlの構造化データを更新するスクリプト
 * 
 * 使用方法:
 * 1. Google Cloud ConsoleでPlaces APIを有効化
 * 2. APIキーを取得
 * 3. 環境変数 GOOGLE_PLACES_API_KEY を設定
 * 4. Place IDを取得（GoogleマップのURLから、またはPlaces APIの検索で取得）
 * 
 * Place IDの取得方法:
 * - Googleマップで店舗を検索
 * - URLのパラメータから取得、または
 * - https://developers.google.com/maps/documentation/places/web-service/place-id を参照
 */

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Google Places APIの設定
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;

// フォールバック値（APIキーがない場合やエラー時のデフォルト値）
const FALLBACK_RATING = {
  ratingValue: '4.4',
  reviewCount: '25'
};

interface GoogleReview {
  author_name: string;
  author_url?: string;
  language?: string;
  original_language?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  original_text?: string;
  time: number;
  translated?: boolean;
}

interface GooglePlacesResponse {
  result?: {
    rating?: number;
    user_ratings_total?: number;
    reviews?: GoogleReview[];
  };
  error_message?: string;
}

/**
 * Google Places APIから評価情報とレビューを取得
 */
async function fetchRatingFromGooglePlaces(): Promise<{
  ratingValue: string;
  reviewCount: string;
  reviews?: GoogleReview[];
} | null> {
  if (!API_KEY || !PLACE_ID) {
    console.warn('⚠️  Google Places APIキーまたはPlace IDが設定されていません。フォールバック値を使用します。');
    console.warn('   環境変数を設定してください: GOOGLE_PLACES_API_KEY, GOOGLE_PLACE_ID');
    return null;
  }

  try {
    // reviews_no_translations=trueで元の言語のレビューを取得
    // language=jaで日本語のメタデータ（relative_time_descriptionなど）を取得
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=rating,user_ratings_total,reviews&reviews_no_translations=true&language=ja&key=${API_KEY}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error(`❌ HTTP エラー: ${response.status} ${response.statusText}`);
      return null;
    }
    
    const data = (await response.json()) as GooglePlacesResponse;

    if (data.error_message) {
      console.error('❌ Google Places API エラー:', data.error_message);
      return null;
    }

    if (data.result?.rating && data.result?.user_ratings_total) {
      // reviews_no_translations=trueを使用しているため、textフィールドには元の言語のテキストが含まれる
      return {
        ratingValue: data.result.rating.toFixed(1),
        reviewCount: data.result.user_ratings_total.toString(),
        reviews: data.result.reviews || []
      };
    }

    return null;
  } catch (error) {
    console.error('❌ 評価情報の取得に失敗しました:', error);
    return null;
  }
}

/**
 * 評価情報とレビューをJSONファイルに保存
 */
async function saveRatingToJson(
  rating: { ratingValue: string; reviewCount: string },
  reviews?: GoogleReview[]
): Promise<boolean> {
  try {
    const jsonPath = path.join(__dirname, '..', 'public', 'ratings.json');
    const ratingData = {
      ratingValue: rating.ratingValue,
      reviewCount: rating.reviewCount,
      reviews: reviews || [],
      lastUpdated: new Date().toISOString()
    };
    
    await writeFile(jsonPath, JSON.stringify(ratingData, null, 2), 'utf8');
    console.log(`✅ 評価情報を保存しました: ${rating.ratingValue}/5.0 (${rating.reviewCount}件)`);
    if (reviews && reviews.length > 0) {
      console.log(`✅ レビュー ${reviews.length}件を保存しました`);
    }
    return true;
  } catch (error) {
    console.warn('⚠️  ratings.jsonの保存に失敗しました（無視して続行）:', error);
    return false;
  }
}

/**
 * index.htmlの構造化データとメタタグを更新
 */
async function updateStructuredData(rating: { ratingValue: string; reviewCount: string }): Promise<boolean> {
  try {
    const indexPath = path.join(__dirname, '..', 'index.html');
    let html = await readFile(indexPath, 'utf8');

    // Restaurantの構造化データにaggregateRatingを追加または更新
    const restaurantRegex = /("@type":\s*"Restaurant"[^}]*)(})/s;
    const aggregateRatingJson = `"aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "${rating.ratingValue}",
              "reviewCount": "${rating.reviewCount}"
            }`;

    if (restaurantRegex.test(html)) {
      // aggregateRatingが既に存在するかチェック
      if (html.includes('"aggregateRating"')) {
        // 既存のaggregateRatingを更新
        const ratingRegex = /"aggregateRating":\s*\{[\s\S]*?"ratingValue":\s*"[^"]*",\s*"reviewCount":\s*"[^"]*"/;
        const replacement = `"aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "${rating.ratingValue}",
              "reviewCount": "${rating.reviewCount}"`;
        
        if (ratingRegex.test(html)) {
          html = html.replace(ratingRegex, replacement);
        }
      } else {
        // aggregateRatingを追加
        html = html.replace(restaurantRegex, `$1,\n            ${aggregateRatingJson}\n          $2`);
      }
    } else {
      console.warn('⚠️  構造化データのRestaurantが見つかりませんでした（既存の値を使用します）。');
    }

    // descriptionメタタグを更新（評価情報を含める）
    const baseDescription = '千葉県君津市にある「一期一美」は、季節ごとに厳選した国産石臼挽きの蕎麦粉を使用し、一本一本手打ち・手切りで仕上げる十割蕎麦と定食、季節の一品料理を楽しめるお店です。';
    const descriptionWithRating = `${baseDescription}Googleマップ評価${rating.ratingValue}（${rating.reviewCount}件）。`;
    
    // descriptionメタタグを更新
    const descriptionRegex = /<meta\s+name="description"\s+content="[^"]*">/;
    const newDescriptionMeta = `<meta name="description" content="${descriptionWithRating.replace(/"/g, '&quot;')}">`;
    
    if (descriptionRegex.test(html)) {
      html = html.replace(descriptionRegex, newDescriptionMeta);
    }
    
    await writeFile(indexPath, html, 'utf8');
    console.log(`✅ index.htmlの構造化データとメタタグを更新しました: ${rating.ratingValue}/5.0 (${rating.reviewCount}件)`);
    return true;
  } catch (error) {
    console.warn('⚠️  index.htmlの更新に失敗しました（既存の値を使用します）:', error);
    return false;
  }
}

/**
 * メイン処理
 * エラーが発生してもビルドプロセスを中断しない
 */
async function main() {
  try {
    console.log('📊 Googleマップの評価情報を取得中...');
    
    const rating = await fetchRatingFromGooglePlaces();
    
    if (rating) {
      // エラーが発生しても続行（ファイル保存はオプション）
      await saveRatingToJson({ ratingValue: rating.ratingValue, reviewCount: rating.reviewCount }, rating.reviews).catch(() => {});
      await updateStructuredData({ ratingValue: rating.ratingValue, reviewCount: rating.reviewCount }).catch(() => {});
    } else {
      console.log(`📝 フォールバック値を使用します: ${FALLBACK_RATING.ratingValue}/5.0 (${FALLBACK_RATING.reviewCount}件)`);
      // フォールバック値でもエラーが発生しても続行
      await saveRatingToJson(FALLBACK_RATING).catch(() => {});
      await updateStructuredData(FALLBACK_RATING).catch(() => {});
    }
    
    console.log('✅ 評価情報の更新処理が完了しました（エラーがあってもビルドは続行されます）');
  } catch (error) {
    // 予期しないエラーでもビルドを続行
    console.warn('⚠️  予期しないエラーが発生しましたが、ビルドは続行します:', error);
  }
}

main().catch((error) => {
  console.error('❌ エラーが発生しました:', error);
  // ビルドプロセスを中断しないため、エラー時もフォールバック値で続行
  // prebuildスクリプトとして実行される場合、ビルドを失敗させない
  console.warn('⚠️  フォールバック値を使用して続行します');
  process.exit(0);
});

