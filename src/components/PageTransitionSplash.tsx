import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransitionSplash: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== prevLocation) {
      // Show splash on route change
      setIsVisible(true);
      setIsFading(false);
      setPrevLocation(location.pathname);

      // Preload images and fonts during transition
      const preloadResources = async () => {
        // Preload route-specific images
        // Preload route-specific images
        const routeImages: { [key: string]: string[] } = {
          '/': ['seiro2.webp', 'ichigo_ichibi_set.webp', 'tenjuu.webp']
        };

        const imagesToLoad = routeImages[location.pathname] || [];

        // Preload images
        const imagePromises = imagesToLoad.map(src => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve; // Resolve even on error to not block
            img.src = `/image/${src}`;
          });
        });

        // Wait for resources or timeout
        await Promise.race([
          Promise.all(imagePromises),
          new Promise(resolve => setTimeout(resolve, 800))
        ]);
      };

      // Start preloading
      preloadResources();

      // Start fade out after minimum display time
      setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 500);
      }, 900);
    }
  }, [location.pathname, prevLocation]);

  if (!isVisible) return null;

  return (
    <div
      className={`page-transition-splash ${isFading ? 'fade-out' : ''}`}
    >
      <img
        src="/image/logo_Splash.webp"
        alt="一期一美"
        className="page-transition-splash-logo"
        width={500}
        height={500}
      />
    </div>
  );
};

export default PageTransitionSplash;
