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

  return (
    <div className="min-h-screen bg-stone-50">
      <nav className={`fixed w-full z-50 ${isHome ? 'absolute' : 'bg-white shadow-md'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 md:py-6">
            <Link to="/" className="flex items-center">
              <img 
                src="/ichibi_logo.svg" 
                alt="一期一美" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
                width="96"
                height="96"
              />
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link 
                to="/lunch" 
                className={`${isHome ? 'text-white hover:text-japanese-gold' : 'text-japanese-indigo hover:text-japanese-red'} transition font-medium px-4 py-2 rounded-md hover:bg-white/10`}
              >
                ランチ
              </Link>
              <Link 
                to="/izakaya" 
                className={`${isHome ? 'text-white hover:text-japanese-gold' : 'text-japanese-indigo hover:text-japanese-red'} transition font-medium px-4 py-2 rounded-md hover:bg-white/10`}
              >
                居酒屋
              </Link>
              <Link 
                to="/drinks" 
                className={`${isHome ? 'text-white hover:text-japanese-gold' : 'text-japanese-indigo hover:text-japanese-red'} transition font-medium px-4 py-2 rounded-md hover:bg-white/10`}
              >
                ドリンク
              </Link>
              <Link 
                to="/activities" 
                className={`${isHome ? 'text-white hover:text-japanese-gold' : 'text-japanese-indigo hover:text-japanese-red'} transition font-medium px-4 py-2 rounded-md hover:bg-white/10`}
              >
                周辺案内
              </Link>
              <Link 
                to="/store-info" 
                className={`${isHome ? 'text-white hover:text-japanese-gold' : 'text-japanese-indigo hover:text-japanese-red'} transition font-medium px-4 py-2 rounded-md hover:bg-white/10`}
              >
                店舗情報
              </Link>
            </div>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden ${isHome ? 'text-white' : 'text-japanese-indigo'} p-2 -mr-2 focus:outline-none`}
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
              className="md:hidden bg-white fixed inset-x-0 top-[72px] bottom-0 overflow-y-auto shadow-lg"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col space-y-6">
                  <Link 
                    to="/lunch" 
                    className="text-japanese-indigo hover:text-japanese-red transition text-lg font-medium py-3 px-4 rounded-md hover:bg-stone-50"
                  >
                    ランチ
                  </Link>
                  <Link 
                    to="/izakaya" 
                    className="text-japanese-indigo hover:text-japanese-red transition text-lg font-medium py-3 px-4 rounded-md hover:bg-stone-50"
                  >
                    居酒屋
                  </Link>
                  <Link 
                    to="/drinks" 
                    className="text-japanese-indigo hover:text-japanese-red transition text-lg font-medium py-3 px-4 rounded-md hover:bg-stone-50"
                  >
                    ドリンク
                  </Link>
                  <Link 
                    to="/activities" 
                    className="text-japanese-indigo hover:text-japanese-red transition text-lg font-medium py-3 px-4 rounded-md hover:bg-stone-50"
                  >
                    周辺案内
                  </Link>
                  <Link 
                    to="/store-info" 
                    className="text-japanese-indigo hover:text-japanese-red transition text-lg font-medium py-3 px-4 rounded-md hover:bg-stone-50"
                  >
                    店舗情報
                  </Link>
                  <div className="pt-4 flex space-x-6">
                    <a 
                      href="https://www.instagram.com/ichigo__ichibi/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-japanese-indigo hover:text-japanese-red transition"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a 
                      href="https://x.com/ichigo_ichibi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-japanese-indigo hover:text-japanese-red transition"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a 
                      href="https://www.facebook.com/share/12DF9aSZmwS/?mibextid=wwXIfr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-japanese-indigo hover:text-japanese-red transition"
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

      <main className="relative">
        {children}
      </main>

      <FooterSection />
    </div>
  );
}