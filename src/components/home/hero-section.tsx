import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Beer, Clock, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

// Optimize image loading with smaller images and proper dimensions
// Keep URLs identical between preloaders and consumers (no query string)
// to prevent "preloaded but not used" warnings and improve LCP.
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
  // For now we serve the same asset at all sizes. When a CDN
  // is introduced, these can point to real variants.
  smallUrl: img.url,
  mediumUrl: img.url,
  placeholder: img.url
}));

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // 次に表示する画像のインデックスは current から算出
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(Array(SLIDER_IMAGES.length).fill(false));
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const imageLoadStatus = useRef<boolean[]>(Array(SLIDER_IMAGES.length).fill(false));
  
  // 表示時間とフェード時間（Tailwindのduration-500と合わせる）
  const DISPLAY_MS = 3000;
  const FADE_MS = 500;

  // 現在と次インデックスを安定して参照
  const nextIndex = (currentImageIndex + 1) % SLIDER_IMAGES.length;
  // 実際に画面に見えている（上に乗っている）スライドのインデックス
  const activeIndex = isTransitioning ? nextIndex : currentImageIndex;

  // Preload images with priority and improved loading strategy
  useEffect(() => {
    let isMounted = true;
    
  // Preload the first image with high priority
  const preloadFirstImage = () => {
      const img = new Image();
      img.decoding = 'async';
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
        setImagesLoaded(true);
      };
      img.src = SLIDER_IMAGES[0].smallUrl;
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

  // Slideshow effect: 3s display + 0.5s fade = 3.5s周期
  useEffect(() => {
    if (!imagesLoaded) return;

    const startSlideshow = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        setIsTransitioning(true);
        // After a short fade, advance to next image
        setTimeout(() => {
          setCurrentImageIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
          setIsTransitioning(false);
        }, FADE_MS);
      }, DISPLAY_MS + FADE_MS);
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

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [imagesLoaded]);

  return (
    <div className="h-screen relative overflow-hidden bg-black">
      {/* Image Slider with real <img> for proper priority */}
      <div className="absolute inset-0 bg-black">
        {/* Current image（下層）*/}
        <img
          src={SLIDER_IMAGES[currentImageIndex].smallUrl}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
          style={{ filter: 'brightness(0.4)', opacity: isTransitioning ? 0 : 1, zIndex: 1 }}
          decoding="async"
          ref={(img) => {
            if (img) {
              img.setAttribute('fetchpriority', currentImageIndex === 0 ? 'high' : 'auto');
            }
          }}
          loading={currentImageIndex === 0 ? 'eager' : 'lazy'}
          onLoad={() => {
            const newLoadedState = [...isImageLoaded];
            newLoadedState[currentImageIndex] = true;
            setIsImageLoaded(newLoadedState);
          }}
        />

        {/* Next image（上層）*/}
        <img
          src={SLIDER_IMAGES[nextIndex].smallUrl}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
          style={{ filter: 'brightness(0.4)', opacity: isTransitioning ? 1 : 0, zIndex: 2 }}
          decoding="async"
          loading="lazy"
          onLoad={() => {
            const newLoadedState = [...isImageLoaded];
            newLoadedState[nextIndex] = true;
            setIsImageLoaded(newLoadedState);
          }}
        />
      </div>
      
      <div className="absolute inset-0 z-30 flex flex-col justify-between pt-32 md:pt-40 will-change-transform">
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center w-full max-w-4xl mx-auto">
            <div className="mb-6 transition-opacity duration-300" style={{opacity: 1}}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-kanteiryuu text-white mb-4">
                <div className="text-2xl md:text-3xl lg:text-4xl mb-2 font-kanteiryuu">十割蕎麦・焼鳥酒場</div>
                <div className="text-4xl md:text-6xl lg:text-7xl font-kanteiryuu">『一期一美』</div>
                <div className="text-xl md:text-2xl lg:text-3xl mt-2 font-kanteiryuu">- ichibi -</div>
              </h1>
              <p className="text-lg md:text-xl text-japanese-gold font-medium font-kanteiryuu">
                千葉県君津市内蓑輪の手打十割蕎麦をメインとしたランチと焼き鳥居酒屋の店
              </p>
            </div>
            
            <div className="mb-8 transition-opacity duration-300" style={{opacity: 1}}>
              <h2 className="text-2xl md:text-3xl text-white mb-2 font-kanteiryuu">
                {SLIDER_IMAGES[activeIndex].title}
              </h2>
              <p className="text-lg text-japanese-gold font-kanteiryuu">
                {SLIDER_IMAGES[activeIndex].subtitle}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/lunch"
                className="bg-[#BE513C] hover:bg-[#984030] text-white px-8 py-3 rounded-md transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 font-kanteiryuu"
              >
                <Utensils className="w-5 h-5" />
                ランチメニュー
              </Link>
              <Link
                to="/izakaya"
                className="bg-[#09314B] hover:bg-[#07273C] text-white px-8 py-3 rounded-md transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 font-kanteiryuu"
              >
                <Beer className="w-5 h-5" />
                居酒屋メニュー
              </Link>
            </div>
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
                <span className="font-kanteiryuu">千葉県君津市内蓑輪122-1</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-japanese-gold" />
                <span className="font-kanteiryuu">0439-72-3988</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
