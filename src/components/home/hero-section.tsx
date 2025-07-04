import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Bed, Clock, MapPin, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Optimize image loading with smaller images and proper dimensions
const SLIDER_IMAGES = [
  {
    url: "https://i.ibb.co/DmCpYJ1/soba.webp",
    alt: "手打ちそば",
    title: "こだわりの手打ちそば",
    subtitle: "毎朝4時から打つこだわりの手打ちそば"
  },
  {
    url: "https://i.ibb.co/Z1J91fh4/yakitori.webp",
    alt: "焼き鳥",
    title: "旬の味わい",
    subtitle: "地元の食材を活かした創作料理"
  },
  {
    url: "https://i.ibb.co/ycFvZqrF/unagi.webp",
    alt: "うなぎ",
    title: "伝統の味",
    subtitle: "代々受け継がれる調理法"
  }
].map(img => ({
  ...img,
  url: `${img.url}?auto=format&fit=crop&w=1920&h=1080&q=75`,
  smallUrl: `${img.url}?auto=format&fit=crop&w=640&h=360&q=60`,
  mediumUrl: `${img.url}?auto=format&fit=crop&w=1280&h=720&q=70`,
  placeholder: `${img.url}?auto=format&fit=crop&w=20&h=10&q=10&blur=10`
}));

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(Array(SLIDER_IMAGES.length).fill(false));
  const intervalRef = useRef<number | null>(null);
  const imageLoadStatus = useRef<boolean[]>(Array(SLIDER_IMAGES.length).fill(false));

  // Preload images with priority and improved loading strategy
  useEffect(() => {
    let isMounted = true;
    
    // Preload the first image with high priority
    const preloadFirstImage = () => {
      const img = new Image();
      img.onload = () => {
        if (!isMounted) return;
        
        imageLoadStatus.current[0] = true;
        setIsImageLoaded([...imageLoadStatus.current]);
        
        // After first image is loaded, load the rest during idle time
        if ('requestIdleCallback' in window) {
          (window as any).requestIdleCallback(preloadRemainingImages, { timeout: 2000 });
        } else {
          setTimeout(preloadRemainingImages, 100);
        }
        
        // Mark as loaded to start the slideshow
        setImagesLoaded(true);
      };
      img.src = SLIDER_IMAGES[0].url;
    };

    // Preload remaining images with lower priority during idle time
    const preloadRemainingImages = () => {
      for (let i = 1; i < SLIDER_IMAGES.length; i++) {
        const img = new Image();
        img.onload = () => {
          if (!isMounted) return;
          
          imageLoadStatus.current[i] = true;
          setIsImageLoaded([...imageLoadStatus.current]);
        };
        // Use medium quality for preloading
        img.src = SLIDER_IMAGES[i].mediumUrl;
      }
    };

    // Start preloading
    preloadFirstImage();

    // Fallback in case images take too long to load
    const timeout = setTimeout(() => {
      if (!imagesLoaded && isMounted) {
        setImagesLoaded(true);
      }
    }, 2000);

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, []);

  // Slideshow effect with cleanup and performance optimizations
  useEffect(() => {
    if (!imagesLoaded) return;

    // Use requestAnimationFrame for smoother transitions
    const startSlideshow = () => {
      intervalRef.current = window.setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === SLIDER_IMAGES.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    };

    startSlideshow();

    // Pause slideshow when tab is not visible to save resources
    const handleVisibilityChange = () => {
      if (document.hidden && intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      } else if (!document.hidden && intervalRef.current === null) {
        startSlideshow();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Clean up interval on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [imagesLoaded]);

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Opening Notice Banner */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-japanese-red text-white py-0.5 text-center text-sm font-medium w-full">
          2025年5月オープン予定
        </div>
      </div>

      {/* Image Slider with progressive loading */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={SLIDER_IMAGES[currentImageIndex].url}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
            style={{ zIndex: currentImageIndex }}
            role="img"
            aria-label={SLIDER_IMAGES[currentImageIndex].alt}
          >
            {/* Low quality placeholder that loads immediately */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
              style={{ 
                backgroundImage: `url(${SLIDER_IMAGES[currentImageIndex].placeholder})`,
                filter: 'brightness(0.4)',
                opacity: isImageLoaded[currentImageIndex] ? 0 : 1
              }}
              aria-hidden="true"
            />
            
            {/* High quality image that fades in when loaded */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out"
              style={{ 
                backgroundImage: `url(${SLIDER_IMAGES[currentImageIndex].smallUrl})`,
                transform: 'scale(1.05)',
                filter: 'brightness(0.4)',
                opacity: isImageLoaded[currentImageIndex] ? 1 : 0
              }}
              aria-hidden="true"
            >
              {/* Hidden actual image for screen readers */}
              <img 
                src={SLIDER_IMAGES[currentImageIndex].smallUrl} 
                alt=""
                className="sr-only" 
                width="1920" 
                height="1080"
                onLoad={() => {
                  const newLoadedState = [...isImageLoaded];
                  newLoadedState[currentImageIndex] = true;
                  setIsImageLoaded(newLoadedState);
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="absolute inset-0 z-30 flex flex-col justify-between pt-16 md:pt-28">
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center w-full max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4 md:mb-8"
            >
              <p className="text-base md:text-xl text-white mb-2">御食事・居酒屋</p>
              <h1 className="text-4xl md:text-8xl font-bold mb-2 md:mb-6 text-white tracking-wider">
                『一期一美』
              </h1>
              <p className="text-lg md:text-2xl mb-2 md:mb-4 text-white">- ichibi -</p>
              <p className="text-base md:text-2xl mb-2 md:mb-4 text-white">
                手打十割そばとうなぎ、居酒屋
              </p>
              <div className="text-gray-200 text-sm md:text-lg space-y-1 md:space-y-2 mb-4 md:mb-8 max-w-2xl mx-auto px-4">
                <p>2025年5月、千葉県君津市内蓑輪にオープン</p>
                <p>自然に囲まれた静かな空間で、</p>
                <p>こだわりの手打ちそばと旬の創作料理、</p>
                <p>一度来たらまた来たくなるようなお店作りを目指しています</p>
              </div>
              <div className="h-0.5 w-32 bg-japanese-red mx-auto mb-6"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4 md:space-y-6 px-2 md:px-4 max-w-4xl mx-auto"
            >
              <h2 className="text-white text-lg md:text-xl mb-2">メニュー</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 mb-4">
                <Link 
                  to="/lunch" 
                  className="bg-japanese-red text-white px-2 md:px-4 py-2 md:py-3 rounded-md hover:bg-red-900 transition flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base"
                  aria-label="ランチメニューを見る"
                >
                  <Utensils className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                  <span>ランチ</span>
                </Link>
                <Link 
                  to="/izakaya" 
                  className="bg-japanese-red text-white px-2 md:px-4 py-2 md:py-3 rounded-md hover:bg-red-900 transition flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base"
                  aria-label="居酒屋メニューを見る"
                >
                  <Utensils className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                  <span>居酒屋</span>
                </Link>
                <Link 
                  to="/drinks" 
                  className="bg-japanese-red text-white px-2 md:px-4 py-2 md:py-3 rounded-md hover:bg-red-900 transition flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base"
                  aria-label="飲み物メニューを見る"
                >
                  <Utensils className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                  <span>飲み物</span>
                </Link>
              </div>
              <div className="flex justify-center gap-4">
                <Link 
                  to="/ryokan" 
                  className="bg-japanese-indigo text-white px-6 md:px-8 py-2 md:py-3 rounded-md hover:bg-indigo-900 transition flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base"
                  aria-label="宿泊案内を見る"
                >
                  <Bed className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                  <span>宿泊案内</span>
                </Link>
                <a 
                  href="https://pal-crepe.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-japanese-red text-white px-6 md:px-8 py-2 md:py-3 rounded-md hover:bg-red-900 transition flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base"
                  aria-label="クレープメニューを見る"
                >
                  <span>クレープ</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quick Info Overlay */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-black/80 text-white py-4 md:py-6 z-30"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="flex items-start gap-2 md:gap-3">
                <Clock className="h-5 w-5 text-japanese-gold flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-xs md:text-sm text-gray-300">営業時間（2025年5月オープン予定）</p>
                  <p className="text-xs md:text-base">
                    ランチ 11:00～14:00 (L.O.13:30)<br />
                    居酒屋 17:00～22:00 (L.O.21:30)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <MapPin className="h-5 w-5 text-japanese-gold flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-xs md:text-sm text-gray-300">所在地</p>
                  <p className="text-xs md:text-base">千葉県君津市内蓑輪122-1</p>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <Phone className="h-5 w-5 text-japanese-gold flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-xs md:text-sm text-gray-300">お電話（2025年5月より）</p>
                  <p className="text-xs md:text-base">0439-XX-XXXX</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}