import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import { FooterSection } from './home/footer-section';
// framer-motion を初期バンドルから外すため、
// モバイルメニューの開閉はCSSトランジションで実装する
import logo from '../assets/ichigo_ichibi_logo.svg';

const SITE_NAME = '十割蕎麦・焼鳥酒場『一期一美』-ichibi-';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [showCrepeHint, setShowCrepeHint] = React.useState(false);

const BASE_URL = 'https://i-chi-bi.com';

const meta = {
  '/': {
    title: '十割蕎麦・焼鳥酒場　一期一美 | 千葉県君津市の手打十割そば・焼き鳥・定食',
    description: '十割蕎麦・焼鳥酒場『一期一美』の公式サイト',
    canonical: `${BASE_URL}/`
  },
  '/menu': {
    title: 'お品書き｜十割蕎麦・焼鳥酒場『一期一美』-ichibi-',
    description: '十割蕎麦のランチメニューと厳選した国産鶏の焼鳥など居酒屋メニューのご案内。',
    canonical: `${BASE_URL}/menu`
  },
  '/store-info': {
    title: '店舗情報｜十割蕎麦・焼鳥酒場『一期一美』-ichibi-',
    description: '店舗の所在地や営業時間などの情報。',
    canonical: `${BASE_URL}/store-info`
  },
  '/dining-philosophy': {
    title: '料理のこだわり | 十割蕎麦・焼鳥酒場『一期一美』-ichibi-',
    description: '素材選びや仕込みへのこだわりをご紹介します。',
    canonical: `${BASE_URL}/dining-philosophy`
  }
} as const;

const fallbackMeta = meta['/'];
const { title, description, canonical } = meta[location.pathname as keyof typeof meta] ?? {
  ...fallbackMeta,
  canonical: `${BASE_URL}${location.pathname}`
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
        <meta property="og:site_name" content={SITE_NAME} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <div className="min-h-screen bg-stone-50">
      <nav className="fixed w-full z-50">
        <div className="w-full overflow-hidden bg-black/50">
          <div className="animate-marquee">
            <span className="whitespace-nowrap px-4 py-2 text-japanese-gold font-kanteiryuu">
              2025年10月6日プレオープン ・ 10月13日グランドオープン
            </span>
            <span
              className="whitespace-nowrap px-4 py-2 text-japanese-gold font-kanteiryuu"
              aria-hidden="true"
            >
              2025年10月6日プレオープン ・ 10月13日グランドオープン
            </span>
          </div>
        </div>
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
              aria-label="メニューを開く"
            >
              メニュー
            </button>
          </div>
        </div>
        
        {/* Mobile menu with CSS transitions (no framer-motion) */}
        <div
          className={`md:hidden fixed inset-x-0 top-[128px] bottom-0 overflow-y-auto bg-black/80 backdrop-blur-md transition-opacity duration-200 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
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
                  <Twitter className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.facebook.com/share/12DF9aSZmwS/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-japanese-gold transition p-3 bg-white/10 rounded-full"
                >
                  <Facebook className="h-6 w-6" />
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
