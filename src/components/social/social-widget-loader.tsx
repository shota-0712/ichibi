import { useEffect } from 'react';

export function SocialWidgetLoader() {
  useEffect(() => {
    // Use a flag to track if scripts have been loaded
    let scriptsLoaded = false;

    const loadInstagramScript = () => {
      if (scriptsLoaded) return;
      scriptsLoaded = true;

      const appendScript = () => {
        if (!document.querySelector('script[src*="instagram.com/embed.js"]')) {
          const instagramScript = document.createElement('script');
          instagramScript.src = 'https://www.instagram.com/embed.js';
          instagramScript.async = true;
          instagramScript.defer = true;
          document.body.appendChild(instagramScript);
        }
      };

      if ('requestIdleCallback' in window) {
        (window as Window & { requestIdleCallback: typeof requestIdleCallback }).requestIdleCallback(appendScript, { timeout: 2000 });
      } else {
        setTimeout(appendScript, 2000);
      }
    };

    // Load scripts only when user scrolls to social section
    const loadSocialScripts = () => {
      // Fallback for browsers without IntersectionObserver support
      if (!('IntersectionObserver' in window)) {
        loadInstagramScript();
        return;
      }

      const observer = new IntersectionObserver((entries) => {
        if (entries.some(entry => entry.isIntersecting)) {
          loadInstagramScript();
          observer.disconnect();
        }
      }, {
        threshold: 0.1,
        rootMargin: '50px'
      });

      const socialSection = document.querySelector('[data-social-section]');
      if (socialSection) {
        observer.observe(socialSection);
      } else {
        // If the section isn't found (e.g. on routes without the feed), fall back to a delayed load
        loadInstagramScript();
      }
    };

    // Load scripts when component mounts
    loadSocialScripts();
  }, []);
  
  return null;
}