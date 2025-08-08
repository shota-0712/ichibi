import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Twitter, Facebook } from 'lucide-react';
import { FooterSection } from './home/footer-section';
import { motion, AnimatePresence } from 'framer-motion';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

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

  // Scroll to top on route change and auto-scroll after 1 second
  React.useEffect(() => {
    // Scroll to top immediately
    window.scrollTo(0, 0);
    
    // Auto-scroll down after 1 second (except for home page)
    if (!isHome) {
      const timer = setTimeout(() => {
        window.scrollTo({
          top: window.innerHeight * 0.8, // 80% of viewport height
          behavior: 'smooth'
        });
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [location, isHome]);

  return (
    <div className="min-h-screen bg-stone-50">
      <nav className="fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 md:py-6">
            <Link to="/" className="flex items-center">
              <img 
                src="/image/ichibilogo.svg" 
                alt="一期一美" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-lg"
                width="96"
                height="96"
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link 
                to="/lunch" 
                className="text-white hover:text-japanese-gold transition font-medium px-6 py-3 rounded-lg bg-black/20 backdrop-blur-sm hover:bg-black/30 shadow-lg hover:shadow-xl transform hover:scale-105 border border-white/20"
              >
                ランチ
              </Link>
              <Link 
                to="/izakaya" 
                className="text-white hover:text-japanese-gold transition font-medium px-6 py-3 rounded-lg bg-black/20 backdrop-blur-sm hover:bg-black/30 shadow-lg hover:shadow-xl transform hover:scale-105 border border-white/20"
              >
                居酒屋
              </Link>
              <Link 
                to="/drinks" 
                className="text-white hover:text-japanese-gold transition font-medium px-6 py-3 rounded-lg bg-black/20 backdrop-blur-sm hover:bg-black/30 shadow-lg hover:shadow-xl transform hover:scale-105 border border-white/20"
              >
                ドリンク
              </Link>
              <Link 
                to="/store-info" 
                className="text-white hover:text-japanese-gold transition font-medium px-6 py-3 rounded-lg bg-black/20 backdrop-blur-sm hover:bg-black/30 shadow-lg hover:shadow-xl transform hover:scale-105 border border-white/20"
              >
                店舗情報
              </Link>
            </div>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-3 -mr-2 focus:outline-none bg-black/20 backdrop-blur-sm rounded-lg border border-white/20"
              aria-label="メニューを開く"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu with animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-black/80 backdrop-blur-md fixed inset-x-0 top-[88px] bottom-0 overflow-y-auto"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col space-y-4">
                  <Link 
                    to="/lunch" 
                    className="text-white hover:text-japanese-gold transition text-lg font-medium py-4 px-6 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20"
                  >
                    ランチ
                  </Link>
                  <Link 
                    to="/izakaya" 
                    className="text-white hover:text-japanese-gold transition text-lg font-medium py-4 px-6 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20"
                  >
                    居酒屋
                  </Link>
                  <Link 
                    to="/drinks" 
                    className="text-white hover:text-japanese-gold transition text-lg font-medium py-4 px-6 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20"
                  >
                    ドリンク
                  </Link>
                  <Link 
                    to="/store-info" 
                    className="text-white hover:text-japanese-gold transition text-lg font-medium py-4 px-6 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20"
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
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative min-h-screen">
        {children}
      </main>

      <FooterSection />
    </div>
  );
}