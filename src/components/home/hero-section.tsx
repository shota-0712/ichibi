import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

// Optimize image loading with smaller images and proper dimensions
// Keep URLs identical between preloaders and consumers (no query string)
// to prevent "preloaded but not used" warnings and improve LCP.
const SLIDER_IMAGES = [
  {
    url: "/image/ichigo_ichibi_set.webp",
    alt: "蕎麦と天ぷらの御膳",
    title: "こだわりの手打ちそば",
    subtitle: "毎朝4時から打つこだわりの手打ちそば"
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
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(Array(SLIDER_IMAGES.length).fill(false));
  const intervalRef = useRef<number | null>(null);
  const imageLoadStatus = useRef<boolean[]>(Array(SLIDER_IMAGES.length).fill(false));

  // 表示時間
  const DISPLAY_MS = 4000;

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

  // Simple slideshow effect
  useEffect(() => {
    if (!imagesLoaded) return;

    const startSlideshow = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
      }, DISPLAY_MS);
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
      {/* Simple image display */}
      <div className="absolute inset-0 bg-black">
        <img
          src={SLIDER_IMAGES[currentImageIndex].smallUrl}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.4)' }}
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
      </div>
      
      <div className="absolute inset-0 z-30 flex flex-col justify-between pt-32 md:pt-40 will-change-transform">
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center w-full max-w-4xl mx-auto">
            <div className="mb-6 transition-opacity duration-300" style={{opacity: 1}}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-kanteiryuu text-white mb-4">
                <div className="text-2xl md:text-3xl lg:text-4xl mb-2 font-kanteiryuu">十割蕎麦・創作酒場</div>
                <div className="text-4xl md:text-6xl lg:text-7xl font-kanteiryuu">『一期一美』</div>
                <div className="text-xl md:text-2xl lg:text-3xl mt-2 font-kanteiryuu">- ichibi -</div>
              </h1>
              <p className="text-lg md:text-xl text-japanese-gold font-medium font-kanteiryuu">
                千葉県君津市内蓑輪の手打十割蕎麦と定食を楽しめるランチと居酒屋のお店
              </p>
            </div>
            
            
            <div className="flex flex-col items-center gap-3">
              <Link
                to="/menu"
                className="text-white text-2xl font-kanteiryuu pb-2 border-b-2 border-japanese-gold hover:border-white transition-colors duration-300"
              >
                お品書き
              </Link>
              <a
                href="https://u.lin.ee/vLXjBhd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl font-kanteiryuu pb-1 border-b border-japanese-gold hover:border-white transition-colors duration-300"
              >
                ご予約はこちら
              </a>
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
                <div className="font-kanteiryuu leading-tight text-center md:text-left">
                  <p>営業時間: ランチ 11:00～14:00 (L.O.13:30) ／ 居酒屋 18:00～21:00 (食事L.O.20:00 / ドリンクL.O.20:30)</p>
                  <p className="text-sm md:text-base text-japanese-gold/90">定休日：火曜日・水曜日</p>
                </div>
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
