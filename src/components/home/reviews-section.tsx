import { useState, useEffect, useRef, useMemo, memo } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface Review {
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

interface RatingsData {
  ratingValue: string;
  reviewCount: string;
  reviews: Review[];
  lastUpdated: string;
}

/**
 * 名前の頭文字を取得（ローマ字で）
 */
function getInitial(name: string | undefined | null): string {
  try {
    if (!name || typeof name !== 'string') return '?';
    
    const trimmedName = name.trim();
    if (!trimmedName) return '?';
    
    const firstChar = trimmedName.charAt(0);
    if (!firstChar) return '?';
  
    // 既にローマ字（英数字）の場合はそのまま大文字にして返す
    if (/[a-zA-Z0-9]/.test(firstChar)) {
      return firstChar.toUpperCase();
    }
  
    // 日本語の文字（ひらがな、カタカナ、漢字）の場合、ローマ字の頭文字に変換
    // ひらがな・カタカナのローマ字変換テーブル（最初の文字のみ）
    const hiraganaToRomaji: { [key: string]: string } = {
      'あ': 'A', 'い': 'I', 'う': 'U', 'え': 'E', 'お': 'O',
      'か': 'K', 'き': 'K', 'く': 'K', 'け': 'K', 'こ': 'K',
      'さ': 'S', 'し': 'S', 'す': 'S', 'せ': 'S', 'そ': 'S',
      'た': 'T', 'ち': 'C', 'つ': 'T', 'て': 'T', 'と': 'T',
      'な': 'N', 'に': 'N', 'ぬ': 'N', 'ね': 'N', 'の': 'N',
      'は': 'H', 'ひ': 'H', 'ふ': 'F', 'へ': 'H', 'ほ': 'H',
      'ま': 'M', 'み': 'M', 'む': 'M', 'め': 'M', 'も': 'M',
      'や': 'Y', 'ゆ': 'Y', 'よ': 'Y',
      'ら': 'R', 'り': 'R', 'る': 'R', 'れ': 'R', 'ろ': 'R',
      'わ': 'W', 'を': 'W', 'ん': 'N',
      'が': 'G', 'ぎ': 'G', 'ぐ': 'G', 'げ': 'G', 'ご': 'G',
      'ざ': 'Z', 'じ': 'J', 'ず': 'Z', 'ぜ': 'Z', 'ぞ': 'Z',
      'だ': 'D', 'ぢ': 'J', 'づ': 'Z', 'で': 'D', 'ど': 'D',
      'ば': 'B', 'び': 'B', 'ぶ': 'B', 'べ': 'B', 'ぼ': 'B',
      'ぱ': 'P', 'ぴ': 'P', 'ぷ': 'P', 'ぺ': 'P', 'ぽ': 'P',
    };
    
    const katakanaToRomaji: { [key: string]: string } = {
      'ア': 'A', 'イ': 'I', 'ウ': 'U', 'エ': 'E', 'オ': 'O',
      'カ': 'K', 'キ': 'K', 'ク': 'K', 'ケ': 'K', 'コ': 'K',
      'サ': 'S', 'シ': 'S', 'ス': 'S', 'セ': 'S', 'ソ': 'S',
      'タ': 'T', 'チ': 'C', 'ツ': 'T', 'テ': 'T', 'ト': 'T',
      'ナ': 'N', 'ニ': 'N', 'ヌ': 'N', 'ネ': 'N', 'ノ': 'N',
      'ハ': 'H', 'ヒ': 'H', 'フ': 'F', 'ヘ': 'H', 'ホ': 'H',
      'マ': 'M', 'ミ': 'M', 'ム': 'M', 'メ': 'M', 'モ': 'M',
      'ヤ': 'Y', 'ユ': 'Y', 'ヨ': 'Y',
      'ラ': 'R', 'リ': 'R', 'ル': 'R', 'レ': 'R', 'ロ': 'R',
      'ワ': 'W', 'ヲ': 'W', 'ン': 'N',
      'ガ': 'G', 'ギ': 'G', 'グ': 'G', 'ゲ': 'G', 'ゴ': 'G',
      'ザ': 'Z', 'ジ': 'J', 'ズ': 'Z', 'ゼ': 'Z', 'ゾ': 'Z',
      'ダ': 'D', 'ヂ': 'J', 'ヅ': 'Z', 'デ': 'D', 'ド': 'D',
      'バ': 'B', 'ビ': 'B', 'ブ': 'B', 'ベ': 'B', 'ボ': 'B',
      'パ': 'P', 'ピ': 'P', 'プ': 'P', 'ペ': 'P', 'ポ': 'P',
    };
    
    // ひらがな・カタカナの変換
    if (hiraganaToRomaji[firstChar]) {
      return hiraganaToRomaji[firstChar];
    }
    if (katakanaToRomaji[firstChar]) {
      return katakanaToRomaji[firstChar];
    }
    
    // 漢字の場合はUnicode範囲から推測（簡易版）
    // 実際の実装では、より高度な変換ライブラリを使用することを推奨
    return firstChar.toUpperCase();
  } catch {
    return '?';
  }
}

/**
 * 星評価コンポーネント
 */
function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < fullStars) {
          // Googleの星の色: #FFC107 (yellow-500)
          return <Star key={i} className="w-4 h-4 fill-[#FFC107] text-[#FFC107]" />;
        } else if (i === fullStars && hasHalfStar) {
          return <Star key={i} className="w-4 h-4 fill-[#FFC107]/50 text-[#FFC107]" />;
        } else {
          return <Star key={i} className="w-4 h-4 fill-none text-gray-300" />;
        }
      })}
    </div>
  );
}

/**
 * レビューカードコンポーネント
 */
const ReviewCard = memo(function ReviewCard({ review }: { review: Review }) {
  if (!review) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] xl:w-[35vw] max-w-[500px] flex-shrink-0 h-[500px] snap-start">
        <p className="text-gray-500">レビューデータがありません</p>
      </div>
    );
  }

  const initial = getInitial(review.author_name);
  // reviews_no_translations=trueを使用しているため、textフィールドには元の言語のテキストが含まれる
  const displayText = review.text || '';
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] xl:w-[35vw] max-w-[500px] flex-shrink-0 h-[500px] sm:h-[550px] md:h-[600px] snap-start hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 mb-4 flex-shrink-0">
        {/* ローマ字一文字のアイコン */}
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 border border-gray-200">
          <span className="text-gray-700 font-semibold text-lg">
            {initial}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-semibold text-gray-900 font-kanteiryuu text-base">
              {initial}様
            </h4>
            <span className="text-sm text-gray-500 whitespace-nowrap font-kanteiryuu ml-2">
              {review.relative_time_description || ''}
            </span>
          </div>
          <StarRating rating={review.rating || 0} />
        </div>
      </div>
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
        <p className="text-gray-700 leading-relaxed font-kanteiryuu text-sm flex-1 overflow-y-auto pr-2">
          {displayText}
        </p>
      </div>
    </div>
  );
});

/**
 * レビューセクションコンポーネント
 */
export function ReviewsSection() {
  const [reviewsData, setReviewsData] = useState<RatingsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    // レビューデータを読み込む（AbortControllerでキャンセル可能に）
    const abortController = new AbortController();
    const timestamp = new Date().getTime();
    
    // 少し遅延させて読み込む（パフォーマンス最適化）
    const loadData = () => {
      if (abortController.signal.aborted) return;
      
      fetch(`/ratings.json?t=${timestamp}`, {
        cache: 'no-store',
        signal: abortController.signal,
        headers: {
          'Cache-Control': 'no-cache'
        }
      })
        .then((res) => {
          if (!res.ok) throw new Error('Failed to fetch reviews');
          return res.json();
        })
        .then((data: RatingsData) => {
          if (!abortController.signal.aborted) {
            setReviewsData(data);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          if (error?.name !== 'AbortError') {
            console.warn('レビューの読み込みに失敗しました:', error);
            setIsLoading(false);
          }
        });
    };

    // 少し遅延させて読み込む（メインスレッドの負荷を軽減）
    // メインスレッドの負荷を軽減するため、次のフレームで読み込む
    let rafId: number | null = null;
    let timeoutId: any = null;
    
    rafId = requestAnimationFrame(() => {
      timeoutId = setTimeout(loadData, 0);
    });

    return () => {
      abortController.abort();
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // スクロール位置をチェック
  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    // 初期チェック
    setTimeout(checkScroll, 100);
    
    // リサイズ時もチェック
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [reviewsData]);

  // レビューのフィルタリングとソートをメモ化（パフォーマンス最適化）
  // 注意: フックは常に同じ順序で呼ばれる必要があるため、早期リターンの前に配置
  const displayedReviews = useMemo(() => {
    if (!reviewsData || !reviewsData.reviews || reviewsData.reviews.length === 0) {
      return [];
    }

    // 日本語のレビュー（original_languageが"ja"）を優先的に取得
    // 星4以上で、文章が書いてあるレビューのみをフィルタリング
    const filteredReviews = reviewsData.reviews.filter(
      review => review.rating >= 4 && review.text && review.text.trim().length > 0
    );
    
    // 日本語のレビューを優先（original_languageが"ja"のもの）
    const japaneseReviews = filteredReviews.filter(
      review => review.original_language === 'ja' || review.language === 'ja'
    );
    
    // 日本語のレビューがあればそれを使用、なければ全てのレビューを使用
    const reviewsToDisplay = japaneseReviews.length > 0 ? japaneseReviews : filteredReviews;
    
    if (reviewsToDisplay.length === 0) {
      return [];
    }

    // 新しい順にソート（timeフィールドが大きいほど新しい）
    // 星評価が高い順、同じ場合は新しい順
    const sortedReviews = [...reviewsToDisplay].sort((a, b) => {
      // まず星評価で比較（高い順）
      const ratingDiff = (b.rating || 0) - (a.rating || 0);
      if (ratingDiff !== 0) {
        return ratingDiff;
      }
      // 星評価が同じ場合は、timeフィールドで比較（新しい順）
      const timeA = a.time || 0;
      const timeB = b.time || 0;
      return timeB - timeA; // 降順（新しい順）
    });

    // 最新のレビューを表示（最大10件まで）
    return sortedReviews.slice(0, 10);
  }, [reviewsData]);

  // 早期リターンはフックの後に配置
  if (isLoading) {
    return null; // 読み込み中は何も表示しない
  }

  if (displayedReviews.length === 0 || !reviewsData) {
    return null; // 条件に合うレビューがない場合は表示しない
  }

  return (
    <div className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-kanteiryuu mb-4">お客様の声</h2>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <StarRating rating={parseFloat(reviewsData.ratingValue)} />
                <span className="text-gray-900 font-semibold text-lg font-kanteiryuu">
                  {reviewsData.ratingValue}
                </span>
                <span className="text-gray-600 font-kanteiryuu">
                  ({reviewsData.reviewCount}件)
                </span>
              </div>
            </div>
            <a
              href="https://g.page/r/CVz6432E_c3kEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-kanteiryuu text-sm transition-colors"
            >
              Googleマップでレビューを投稿する
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="relative">
            {/* 左スクロールボタン */}
            <button
              onClick={() => {
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
                }
              }}
              disabled={!canScrollLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg transition-opacity ${
                canScrollLeft ? 'opacity-100 hover:bg-gray-50' : 'opacity-0 pointer-events-none'
              }`}
              aria-label="前のレビューへ"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            {/* スクロール可能なコンテナ */}
            <div
              ref={scrollContainerRef}
              role="region"
              aria-label="お客様のレビュー"
              tabIndex={0}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth snap-x snap-mandatory focus:outline-none focus:ring-2 focus:ring-japanese-gold focus:ring-offset-2 rounded-lg"
              onScroll={() => {
                if (scrollContainerRef.current) {
                  const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
                  setCanScrollLeft(scrollLeft > 0);
                  setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
                }
              }}
              onKeyDown={(e) => {
                try {
                  if (!scrollContainerRef.current) return;
                  const scrollAmount = 400;
                  if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                  } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                  }
                } catch (error) {
                  console.warn('キーボード操作でエラーが発生しました:', error);
                }
              }}
            >
              {displayedReviews.map((review, index) => (
                <ReviewCard key={`${review.author_name}-${review.time}-${index}`} review={review} />
              ))}
            </div>

            {/* 右スクロールボタン */}
            <button
              onClick={() => {
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
                }
              }}
              disabled={!canScrollRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg transition-opacity ${
                canScrollRight ? 'opacity-100 hover:bg-gray-50' : 'opacity-0 pointer-events-none'
              }`}
              aria-label="次のレビューへ"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

