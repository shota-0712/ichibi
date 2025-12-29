/**
 * Google Places APIを使ってPlace IDを取得するヘルパースクリプト
 * 
 * 使用方法:
 * GOOGLE_PLACES_API_KEY=your_api_key tsx scripts/get-place-id.ts "店舗名 住所"
 * 
 * 例:
 * GOOGLE_PLACES_API_KEY=your_api_key tsx scripts/get-place-id.ts "一期一美 千葉県君津市"
 */

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const query = process.argv[2] || '十割蕎麦・創作酒場 一期一美 千葉県君津市';

if (!API_KEY) {
  console.error('❌ GOOGLE_PLACES_API_KEY環境変数が設定されていません');
  process.exit(1);
}

async function getPlaceId() {
  try {
    // Text Search APIで店舗を検索
    const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${API_KEY}`;
    
    const response = await fetch(searchUrl);
    const data = await response.json();

    if (data.error_message) {
      console.error('❌ エラー:', data.error_message);
      process.exit(1);
    }

    if (data.results && data.results.length > 0) {
      const place = data.results[0];
      console.log('\n✅ Place IDが見つかりました:');
      console.log(`Place ID: ${place.place_id}`);
      console.log(`店舗名: ${place.name}`);
      console.log(`住所: ${place.formatted_address}`);
      console.log(`評価: ${place.rating || 'N/A'}/5.0 (${place.user_ratings_total || 0}件)`);
      console.log('\n環境変数に設定してください:');
      console.log(`export GOOGLE_PLACE_ID="${place.place_id}"`);
    } else {
      console.log('❌ 店舗が見つかりませんでした');
    }
  } catch (error) {
    console.error('❌ エラーが発生しました:', error);
    process.exit(1);
  }
}

getPlaceId();

