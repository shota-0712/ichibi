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
      <nav className={`fixed w-full z-50 ${isHome ? 'absolute' : 'bg-japanese-indigo'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 md:py-6">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.svg" 
                alt="一期一美" 
                className={`w-16 h-16 ${isHome ? 'invert' : ''}`}
                width="64"
                height="64"
              />
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/lunch" className="text-white hover:text-japanese-gold transition">
                ランチ
              </Link>
              <Link to="/izakaya" className="text-white hover:text-japanese-gold transition">
                居酒屋
              </Link>
              <Link to="/drinks" className="text-white hover:text-japanese-gold transition">
                ドリンク
              </Link>
              <Link to="/ryokan" className="text-white hover:text-japanese-gold transition">
                宿泊案内
              </Link>
              <Link to="/activities" className="text-white hover:text-japanese-gold transition">
                周辺案内
              </Link>
              <Link to="/store-info" className="text-white hover:text-japanese-gold transition">
                店舗情報
              </Link>
            </div>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 -mr-2 focus:outline-none"
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
              className="md:hidden bg-japanese-indigo fixed inset-x-0 top-[72px] bottom-0 overflow-y-auto"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col space-y-6">
                  <Link 
                    to="/lunch" 
                    className="text-white hover:text-japanese-gold transition text-lg"
                  >
                    ランチ
                  </Link>
                  <Link 
                    to="/izakaya" 
                    className="text-white hover:text-japanese-gold transition text-lg"
                  >
                    居酒屋
                  </Link>
                  <Link 
                    to="/drinks" 
                    className="text-white hover:text-japanese-gold transition text-lg"
                  >
                    ドリンク
                  </Link>
                  <Link 
                    to="/ryokan" 
                    className="text-white hover:text-japanese-gold transition text-lg"
                  >
                    宿泊案内
                  </Link>
                  <Link 
                    to="/activities" 
                    className="text-white hover:text-japanese-gold transition text-lg"
                  >
                    周辺案内
                  </Link>
                  <Link 
                    to="/store-info" 
                    className="text-white hover:text-japanese-gold transition text-lg"
                  >
                    店舗情報
                  </Link>
                  <div className="pt-4 flex space-x-6">
                    <a 
                      href="https://www.instagram.com/ichigo__ichibi/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-japanese-gold transition"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a 
                      href="https://x.com/ichigo_ichibi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-japanese-gold transition"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a 
                      href="https://www.facebook.com/share/12DF9aSZmwS/?mibextid=wwXIfr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-japanese-gold transition"
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