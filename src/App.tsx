import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import PageTransitionSplash from './components/PageTransitionSplash';

// Use React.lazy with improved loading strategy
const Menu = lazy(() =>
  import('./pages/Menu').then(module => ({ default: module.Menu }))
);
const StoreInfo = lazy(() =>
  import('./pages/StoreInfo').then(module => ({ default: module.StoreInfo }))
);
const DiningPhilosophy = lazy(() =>
  import('./pages/DiningPhilosophy').then(module => ({ default: module.DiningPhilosophy }))
);


// Preload components based on user interaction
const preloadComponent = (component: string): void => {
  switch(component) {
    case 'menu':
      void import('./pages/Menu');
      break;
    case 'store-info':
      void import('./pages/StoreInfo');
      break;
    case 'dining-philosophy':
      void import('./pages/DiningPhilosophy');
      break;
  }
};

// Add event listeners for navigation preloading
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    // Use requestIdleCallback to avoid blocking main thread
    if ('requestIdleCallback' in window) {
      (window as Window & { requestIdleCallback: typeof requestIdleCallback }).requestIdleCallback(() => {
        document.querySelectorAll('a[href^="/"]').forEach(link => {
          const href = link.getAttribute('href');
          if (href && href !== '/') {
            const path = href.substring(1); // Remove leading slash
            
            // Add event listeners with passive option for better performance
            link.addEventListener('mouseenter', () => preloadComponent(path), { passive: true });
            link.addEventListener('touchstart', () => preloadComponent(path), { passive: true });
          }
        });
      }, { timeout: 2000 });
    }
  });
}

function App() {
  return (
    <>
      <PageTransitionSplash />
      <Layout>
        <Routes>
        {/* Only Home is eagerly loaded */}
        <Route path="/" element={<Home />} />
        
        {/* All other routes are lazy loaded */}
        <Route path="/menu" element={
          <Suspense fallback={null}>
            <Menu />
          </Suspense>
        } />
        <Route path="/store-info" element={
          <Suspense fallback={null}>
            <StoreInfo />
          </Suspense>
        } />
        <Route path="/dining-philosophy" element={
          <Suspense fallback={null}>
            <DiningPhilosophy />
          </Suspense>
        } />

        </Routes>
      </Layout>
    </>
  );
}

export default App;