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
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-kanteiryuu text-white mb-4">
                一期一美
              </h1>
              <p className="text-lg md:text-xl text-japanese-gold font-medium">
                千葉県君津市内蓑輪の手打十割そばと創作料理の宿
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl text-white mb-2">
                {SLIDER_IMAGES[currentImageIndex].title}
              </h2>
              <p className="text-lg text-japanese-gold">
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
                className="bg-japanese-red hover:bg-red-800 text-white px-8 py-3 rounded-md transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Utensils className="w-5 h-5" />
                ランチメニュー
              </Link>
              <Link 
                to="/ryokan" 
                className="bg-japanese-indigo hover:bg-blue-900 text-white px-8 py-3 rounded-md transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Bed className="w-5 h-5" />
                宿泊案内
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
                <span>営業時間: 11:00-22:00</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-japanese-gold" />
                <span>千葉県君津市内蓑輪</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-japanese-gold" />
                <span>0439-XX-XXXX</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}