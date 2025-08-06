import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Clock, MapPin, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Optimize image loading with smaller images and proper dimensions
const SLIDER_IMAGES = [
  {
    url: "/image/soba.webp",
    alt: "手打ちそば",
    title: "こだわりの手打ちそば",
    subtitle: "毎朝4時から打つこだわりの手打ちそば"
  },
  {
    url: "/image/yakitori.webp",
    alt: "焼き鳥",
    title: "伝統の味",
    subtitle: "代々受け継がれる伝統のたれ"
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
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(Array(SLIDER_IMAGES.length).fill(false));
  const [isTransitioning, setIsTransitioning] = useState(false);
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
          (window as Window & { requestIdleCallback: typeof requestIdleCallback }).requestIdleCallback(preloadRemainingImages, { timeout: 2000 });
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
  }, [imagesLoaded]);

  // Slideshow effect with cleanup and performance optimizations
  useEffect(() => {
    if (!imagesLoaded) return;

    // Use requestAnimationFrame for smoother transitions
    const startSlideshow = () => {
      intervalRef.current = window.setInterval(() => {
        setIsTransitioning(true);
        setNextImageIndex((currentIndex) => 
          currentIndex === SLIDER_IMAGES.length - 1 ? 0 : currentIndex + 1
        );
        
        // After a short delay, switch the images
        setTimeout(() => {
          setCurrentImageIndex(nextImageIndex);
          setIsTransitioning(false);
        }, 250);
      }, 3000);
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
  }, [imagesLoaded, nextImageIndex]);

  return (
    <div className="h-screen relative overflow-hidden bg-black">
      {/* Opening Notice Banner */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-japanese-red text-white py-0.5 text-center text-sm font-medium w-full">
          2025年10月1日オープン予定
        </div>
      </div>

      {/* Image Slider with progressive loading */}
      <div className="absolute inset-0 bg-black">
        {/* Current image */}
        <div
          className="absolute inset-0 transition-opacity duration-500 ease-in-out"
          style={{ 
            opacity: isTransitioning ? 0 : 1,
            zIndex: 1
          }}
        >
          {/* Low quality placeholder that loads immediately */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 bg-black"
            style={{ 
              backgroundImage: `url(${SLIDER_IMAGES[currentImageIndex].placeholder})`,
              filter: 'brightness(0.4)',
              opacity: isImageLoaded[currentImageIndex] ? 0 : 1
            }}
            aria-hidden="true"
          />
          
          {/* High quality image that fades in when loaded */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out"
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
              fetchPriority={currentImageIndex === 0 ? "high" : "low"}
              loading={currentImageIndex === 0 ? "eager" : "lazy"}
              sizes="100vw"
              srcSet={`${SLIDER_IMAGES[currentImageIndex].smallUrl} 640w, ${SLIDER_IMAGES[currentImageIndex].mediumUrl} 1280w, ${SLIDER_IMAGES[currentImageIndex].url} 1920w`}
              onLoad={() => {
                const newLoadedState = [...isImageLoaded];
                newLoadedState[currentImageIndex] = true;
                setIsImageLoaded(newLoadedState);
              }}
            />
          </div>
        </div>

        {/* Next image (preloaded and ready to fade in) */}
        <div
          className="absolute inset-0 transition-opacity duration-500 ease-in-out"
          style={{ 
            opacity: isTransitioning ? 1 : 0,
            zIndex: 2
          }}
        >
          {/* Low quality placeholder that loads immediately */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 bg-black"
            style={{ 
              backgroundImage: `url(${SLIDER_IMAGES[nextImageIndex].placeholder})`,
              filter: 'brightness(0.4)',
              opacity: isImageLoaded[nextImageIndex] ? 0 : 1
            }}
            aria-hidden="true"
          />
          
          {/* High quality image that fades in when loaded */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out"
            style={{ 
              backgroundImage: `url(${SLIDER_IMAGES[nextImageIndex].smallUrl})`,
              transform: 'scale(1.05)',
              filter: 'brightness(0.4)',
              opacity: isImageLoaded[nextImageIndex] ? 1 : 0
            }}
            aria-hidden="true"
          >
            {/* Hidden actual image for screen readers */}
            <img 
              src={SLIDER_IMAGES[nextImageIndex].smallUrl} 
              alt=""
              className="sr-only" 
              width="1920" 
              height="1080"
              onLoad={() => {
                const newLoadedState = [...isImageLoaded];
                newLoadedState[nextImageIndex] = true;
                setIsImageLoaded(newLoadedState);
              }}
            />
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 z-30 flex flex-col justify-between pt-16 md:pt-28">
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center w-full max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-kanteiryuu text-white mb-4">
                <div className="text-2xl md:text-3xl lg:text-4xl mb-2 font-kanteiryuu">十割蕎麦・焼鳥酒場</div>
                <div className="text-4xl md:text-6xl lg:text-7xl font-kanteiryuu">『一期一美』</div>
                <div className="text-xl md:text-2xl lg:text-3xl mt-2 font-kanteiryuu">- ichibi -</div>
              </h1>
              <p className="text-lg md:text-xl text-japanese-gold font-medium font-kanteiryuu">
                千葉県君津市内蓑輪の手打十割蕎麦をメインとしたランチと焼き鳥居酒屋の店
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl text-white mb-2 font-kanteiryuu">
                {SLIDER_IMAGES[currentImageIndex].title}
              </h2>
              <p className="text-lg text-japanese-gold font-kanteiryuu">
                {SLIDER_IMAGES[currentImageIndex].subtitle}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                to="/lunch" 
                className="bg-japanese-red hover:bg-red-800 text-white px-8 py-3 rounded-md transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 font-kanteiryuu"
              >
                <Utensils className="w-5 h-5" />
                ランチメニュー
              </Link>
              <Link 
                to="/izakaya" 
                className="bg-japanese-indigo hover:bg-blue-900 text-white px-8 py-3 rounded-md transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 font-kanteiryuu"
              >
                <Utensils className="w-5 h-5" />
                居酒屋メニュー
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom info section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-black bg-opacity-50 text-white p-4 md:p-6"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-japanese-gold" />
                <span className="font-kanteiryuu">営業時間: 11:00-22:00</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-japanese-gold" />
                <span className="font-kanteiryuu">千葉県君津市内蓑輪</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-japanese-gold" />
                <span className="font-kanteiryuu">0439-XX-XXXX</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}