import React, { useEffect } from 'react';

// Define requestIdleCallback for TypeScript
interface RequestIdleCallbackOptions {
  timeout?: number;
}

interface RequestIdleCallbackDeadline {
  didTimeout: boolean;
  timeRemaining: () => number;
}

declare global {
  interface Window {
    requestIdleCallback?: (
      callback: (deadline: RequestIdleCallbackDeadline) => void,
      opts?: RequestIdleCallbackOptions
    ) => number;
    cancelIdleCallback?: (handle: number) => void;
  }
}

export function SocialWidgetLoader() {
  useEffect(() => {
    // Use a flag to track if scripts have been loaded
    let scriptsLoaded = false;
    
    // Function to load social media scripts when needed
    const loadSocialScripts = () => {
      if (scriptsLoaded) return;
      
      // Load scripts only when user scrolls to social section
      const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        const isVisible = entries.some(entry => entry.isIntersecting);
        
        if (isVisible && !scriptsLoaded) {
          scriptsLoaded = true;
          
          // Use requestIdleCallback to load non-critical scripts
          const loadScripts = () => {
            // We only need to load Instagram embed script
            // Twitter and Facebook widgets are now just links
            
            // Add Instagram embed script if needed
            if (!document.querySelector('script[src*="instagram.com/embed.js"]')) {
              const instagramScript = document.createElement('script');
              instagramScript.src = 'https://www.instagram.com/embed.js';
              instagramScript.async = true;
              instagramScript.defer = true;
              document.body.appendChild(instagramScript);
            }
          };
          
          // Use requestIdleCallback if available, otherwise use setTimeout
          if (window.requestIdleCallback) {
            window.requestIdleCallback(loadScripts, { timeout: 2000 });
          } else {
            setTimeout(loadScripts, 2000);
          }
          
          // Disconnect observer once scripts are loaded
          observer.disconnect();
        }
      };
      
      // Create intersection observer
      const observer = new IntersectionObserver(handleIntersection, {
        rootMargin: '200px', // Load scripts when social section is 200px from viewport
        threshold: 0.1
      });
      
      // Observe social feed section
      const socialFeedSection = document.querySelector('.social-feed-section');
      if (socialFeedSection) {
        observer.observe(socialFeedSection);
      } else {
        // If section not found, try to find any social widget containers
        const socialWidgets = document.querySelectorAll('.instagram-embed');
        if (socialWidgets.length > 0) {
          socialWidgets.forEach(widget => observer.observe(widget as Element));
        } else {
          // If no elements found, load scripts when user scrolls halfway down the page
          const handleScroll = () => {
            if (window.scrollY > window.innerHeight && !scriptsLoaded) {
              loadScripts();
              window.removeEventListener('scroll', handleScroll);
            }
          };
          
          window.addEventListener('scroll', handleScroll, { passive: true });
          
          // Clean up scroll listener
          return () => window.removeEventListener('scroll', handleScroll);
        }
      }
      
      // Clean up observer
      return () => observer.disconnect();
    };
    
    // Wait until page is fully loaded before setting up observers
    if (document.readyState === 'complete') {
      loadSocialScripts();
    } else {
      window.addEventListener('load', loadSocialScripts);
      return () => window.removeEventListener('load', loadSocialScripts);
    }
  }, []);

  return null;
}