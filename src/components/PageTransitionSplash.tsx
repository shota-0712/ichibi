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
        const routeImages: { [key: string]: string[] } = {
          '/lunch': ['seiro2.webp', 'ichigo_ichibi_set.webp', 'tenjuu.webp'],
          '/dinner': ['tenjuu.webp'],
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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        opacity: isFading ? 0 : 1,
        transition: 'opacity 0.5s ease-out',
        pointerEvents: 'none'
      }}
    >
      <img
        src="/image/logo_Splash.webp"
        alt="一期一美"
        style={{
          maxWidth: '250px',
          maxHeight: '250px',
          opacity: 0.6,
          objectFit: 'contain',
          animation: 'fadeInLogo 0.8s ease-in-out forwards'
        }}
      />
      <style>
        {`
          @keyframes fadeInLogo {
            0% { opacity: 0; }
            100% { opacity: 0.6; }
          }
        `}
      </style>
    </div>
  );
};

export default PageTransitionSplash;
