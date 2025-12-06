import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Instagram } from 'lucide-react';
import { XLogo } from './icons/x-logo';
import { FooterSection } from './home/footer-section';
// framer-motion を初期バンドルから外すため、
// モバイルメニューの開閉はCSSトランジションで実装する
import logo from '../assets/ichigo_ichibi_logo.svg';

const SITE_NAME = '十割蕎麦・創作酒場『一期一美』- ichibi -';

const BASE_URL = 'https://i-chi-bi.com';

const meta = {
  '/': {
    title: '十割蕎麦・創作酒場 一期一美 |千葉県君津市の手打そば・定食・おでん',
    description: '十割蕎麦・創作酒場『一期一美』の公式サイト',
    canonical: `${BASE_URL}/`,
    ogImage: `${BASE_URL}/image/ichigo_ichibi_set.webp`
  },
  '/menu': {
    title: 'お品書き｜十割蕎麦・創作酒場 一期一美 |千葉県君津市の手打そば・定食・おでん',
    description: '十割蕎麦のランチメニューと定食、一品料理など居酒屋メニューのご案内。',
    canonical: `${BASE_URL}/menu`,
    ogImage: `${BASE_URL}/image/ichigo_ichibi_set.webp`
  },
  '/store-info': {
    title: '店舗情報｜十割蕎麦・創作酒場 一期一美 |千葉県君津市の手打そば・定食・おでん',
    description: '店舗の所在地や営業時間などの情報。',
    canonical: `${BASE_URL}/store-info`,
    ogImage: `${BASE_URL}/image/ichigo_ichibi_set.webp`
  },
  '/contact': {
    title: 'お問い合わせ・ご要望｜十割蕎麦・創作酒場 一期一美 |千葉県君津市の手打そば・定食・おでん',
    description: '店舗へのお問い合わせやご意見・ご要望、メニューに関するご質問などはこちらから。',
    canonical: `${BASE_URL}/contact`,
    ogImage: `${BASE_URL}/image/ichigo_ichibi_set.webp`
  },
  '/dining-philosophy': {
    title: '料理のこだわり｜十割蕎麦・創作酒場 一期一美 |千葉県君津市の手打そば・定食・おでん',
    description: '素材選びや仕込みへのこだわりをご紹介します。',
    canonical: `${BASE_URL}/dining-philosophy`,
    ogImage: `${BASE_URL}/image/ichigo_ichibi_set.webp`
  }
} as const;

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [showCrepeHint, setShowCrepeHint] = React.useState(false);

  const fallbackMeta = meta['/'];
  const { title, description, canonical, ogImage } = meta[location.pathname as keyof typeof meta] ?? {
    ...fallbackMeta,
    canonical: `${BASE_URL}${location.pathname}`,
    ogImage: `${BASE_URL}/image/ichigo_ichibi_set.webp`
  };

  // Close menu when route changes
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // 初回アクセス時のみ「クレープはこちら」を6秒表示（枠なしテキスト）
  React.useEffect(() => {
    try {
      const KEY = 'palCrepeHintShown';
      const shown = localStorage.getItem(KEY);
      if (!shown) {
        setShowCrepeHint(true);
        const t = setTimeout(() => {
          setShowCrepeHint(false);
          localStorage.setItem(KEY, '1');
        }, 6000);
        return () => clearTimeout(t);
      }
    } catch {
      // ストレージ未許可などでも致命ではないため無視
    }
  }, []);

  // クレープ案内バブルは不要になったため削除（ロゴのみ表示）

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="application-name" content={SITE_NAME} />
        <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <div className="min-h-screen bg-stone-50">
        <nav className="fixed w-full z-50">
          <div className="container mx-auto px-4">
            <div className="relative flex items-center justify-between py-4 md:py-6">
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="一期一美"
                  className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-lg"
                  width="96"
                  height="96"
                  loading="eager"
                  decoding="async"
                  ref={(img) => {
                    if (img) {
                      img.setAttribute('fetchpriority', 'high');
                    }
                  }}
                />
              </Link>
              <div className="hidden md:flex space-x-4">
                <Link
                  to="/menu"
                  className="text-white hover:text-japanese-gold transition font-medium px-6 py-3 rounded-lg bg-black/20 backdrop-blur-sm hover:bg-black/30 shadow-lg hover:shadow-xl transform hover:scale-105 border border-white/20 font-kanteiryuu"
                >
                  お品書き
                </Link>
                <Link
                  to="/store-info"
                  className="text-white hover:text-japanese-gold transition font-medium px-6 py-3 rounded-lg bg-black/20 backdrop-blur-sm hover:bg-black/30 shadow-lg hover:shadow-xl transform hover:scale-105 border border-white/20 font-kanteiryuu"
                >
                  店舗情報
                </Link>
                <a
                  href="https://u.lin.ee/vLXjBhd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-japanese-gold transition font-medium px-6 py-3 rounded-lg bg-japanese-red/80 backdrop-blur-sm hover:bg-japanese-red shadow-lg hover:shadow-xl transform hover:scale-105 border border-white/20 font-kanteiryuu"
                >
                  ご予約
                </a>
                <Link
                  to="/contact"
                  className="text-white hover:text-japanese-gold transition font-medium px-6 py-3 rounded-lg bg-black/20 backdrop-blur-sm hover:bg-black/30 shadow-lg hover:shadow-xl transform hover:scale-105 border border-white/20 font-kanteiryuu"
                >
                  お問い合わせ
                </Link>
              </div>
              {/* Pal crepe ロゴ（枠なし）＋ 初回のみテキスト（ロゴの上・より右端に） - ホームのみ表示 */}
              {isHome && (
                <div className="absolute -right-2 md:-right-4 top-full mt-2 z-50 flex flex-col items-end text-right gap-1 w-max">
                  {showCrepeHint && (
                    <div className="flex flex-col items-end leading-tight text-white text-sm font-kanteiryuu whitespace-nowrap text-right">
                      <span>クレープは</span>
                      <span>こちら</span>
                    </div>
                  )}
                  <a
                    href="https://pal-crepe.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pal crepe 公式サイト"
                    className="block"
                  >
                    <img
                      src="/image/Pal-crepe_logo.svg"
                      alt="Pal crepe ロゴ"
                      className="h-12 w-auto md:h-10 lg:h-12"
                      height={48}
                      loading="eager"
                      decoding="async"
                    />
                  </a>
                </div>
              )}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white text-lg font-kanteiryuu pb-1 border-b-2 border-white hover:border-japanese-gold transition-colors duration-300 focus:outline-none"
                aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                メニュー
              </button>
            </div>
          </div>

          {/* Mobile menu with CSS transitions (no framer-motion) */}
          <div
            id="mobile-menu"
            className={`md:hidden fixed inset-x-0 top-[128px] bottom-0 overflow-y-auto bg-black/80 backdrop-blur-md transition-opacity duration-200 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            aria-hidden={!isMenuOpen}
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/menu"
                  className="text-white hover:text-japanese-gold transition text-lg font-medium py-4 px-6 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 font-kanteiryuu"
                >
                  お品書き
                </Link>
                <Link
                  to="/store-info"
                  className="text-white hover:text-japanese-gold transition text-lg font-medium py-4 px-6 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 font-kanteiryuu"
                >
                  店舗情報
                </Link>
                <a
                  href="https://u.lin.ee/vLXjBhd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-japanese-gold transition text-lg font-medium py-4 px-6 rounded-lg bg-japanese-red/80 hover:bg-japanese-red border border-white/20 font-kanteiryuu text-center"
                >
                  ご予約
                </a>
                <Link
                  to="/contact"
                  className="text-white hover:text-japanese-gold transition text-lg font-medium py-4 px-6 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 font-kanteiryuu"
                >
                  お問い合わせ
                </Link>
                <div className="pt-4 flex space-x-6 justify-center">
                  <a
                    href="https://www.instagram.com/ichigo__ichibi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-japanese-gold transition p-3 bg-white/10 rounded-full"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://x.com/ichigo_ichibi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-japanese-gold transition p-3 bg-white/10 rounded-full"
                  >
                    <XLogo className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="relative min-h-screen">
          {children}
        </main>

        <FooterSection />
      </div>
    </>
  );
}
