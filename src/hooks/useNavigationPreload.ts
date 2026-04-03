import { useEffect } from 'react';

export const useNavigationPreload = () => {
    useEffect(() => {
        const preloadComponent = (component: string): void => {
            switch (component) {
                case 'menu':
                    void import('../pages/Menu');
                    break;
                case 'store-info':
                    void import('../pages/StoreInfo');
                    break;
                case 'contact':
                    void import('../pages/Contact');
                    break;
                case 'dining-philosophy':
                    void import('../pages/DiningPhilosophy');
                    break;
            }
        };

        const handleLoad = () => {
            // Use requestIdleCallback to avoid blocking main thread
            if ('requestIdleCallback' in window) {
                (window as Window & { requestIdleCallback: typeof requestIdleCallback }).requestIdleCallback(() => {
                    document.querySelectorAll('a[href^="/"]').forEach(link => {
                        const href = link.getAttribute('href');
                        if (href && href !== '/') {
                            const path = href.substring(1).split('#')[0]; // Remove leading slash and hash
                            const rootSegment = path.split('/')[0];

                            // Add event listeners with passive option for better performance
                            link.addEventListener('mouseenter', () => preloadComponent(rootSegment), { passive: true });
                            link.addEventListener('touchstart', () => preloadComponent(rootSegment), { passive: true });
                        }
                    });
                }, { timeout: 2000 });
            }
        };

        if (typeof window !== 'undefined') {
            if (document.readyState === 'complete') {
                handleLoad();
            } else {
                window.addEventListener('load', handleLoad);
            }
        }

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);
};
