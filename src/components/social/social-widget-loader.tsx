import { useEffect } from 'react';

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
          if ('requestIdleCallback' in window) {
            (window as Window & { requestIdleCallback: typeof requestIdleCallback }).requestIdleCallback(loadScripts, { timeout: 2000 });
          } else {
            setTimeout(loadScripts, 2000);
          }
          
          // Disconnect observer once scripts are loaded
          observer.disconnect();
        }
      };
      
      // Create intersection observer
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1,
        rootMargin: '50px'
      });
      
      // Observe social feed section
      const socialSection = document.querySelector('[data-social-section]');
      if (socialSection) {
        observer.observe(socialSection);
      }
    };
    
    // Load scripts when component mounts
    loadSocialScripts();
  }, []);
  
  return null;
}