import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';

// Use React.lazy with improved loading strategy
const Ryokan = lazy(() => 
  import('./pages/Ryokan').then(module => ({ default: module.Ryokan }))
);
const Lunch = lazy(() => 
  import('./pages/Lunch').then(module => ({ default: module.Lunch }))
);
const Izakaya = lazy(() => 
  import('./pages/Izakaya').then(module => ({ default: module.Izakaya }))
);
const Activities = lazy(() => 
  import('./pages/Activities').then(module => ({ default: module.Activities }))
);
const StoreInfo = lazy(() => 
  import('./pages/StoreInfo').then(module => ({ default: module.StoreInfo }))
);
const Drinks = lazy(() => 
  import('./pages/Drinks').then(module => ({ default: module.Drinks }))
);
const StaffLogin = lazy(() => 
  import('./pages/StaffLogin').then(module => ({ default: module.StaffLogin }))
);

// Preload components based on user interaction
const preloadComponent = (component: string) => {
  switch(component) {
    case 'ryokan':
      import('./pages/Ryokan');
      break;
    case 'lunch':
      import('./pages/Lunch');
      break;
    case 'izakaya':
      import('./pages/Izakaya');
      break;
    case 'activities':
      import('./pages/Activities');
      break;
    case 'store-info':
      import('./pages/StoreInfo');
      break;
    case 'drinks':
      import('./pages/Drinks');
      break;
  }
};

// Add event listeners for navigation preloading
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    // Use requestIdleCallback to avoid blocking main thread
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => {
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
    <Layout>
      <Routes>
        {/* Only Home is eagerly loaded */}
        <Route path="/" element={<Home />} />
        
        {/* All other routes are lazy loaded */}
        <Route path="/ryokan" element={
          <Suspense fallback={null}>
            <Ryokan />
          </Suspense>
        } />
        <Route path="/lunch" element={
          <Suspense fallback={null}>
            <Lunch />
          </Suspense>
        } />
        <Route path="/izakaya" element={
          <Suspense fallback={null}>
            <Izakaya />
          </Suspense>
        } />
        <Route path="/activities" element={
          <Suspense fallback={null}>
            <Activities />
          </Suspense>
        } />
        <Route path="/store-info" element={
          <Suspense fallback={null}>
            <StoreInfo />
          </Suspense>
        } />
        <Route path="/drinks" element={
          <Suspense fallback={null}>
            <Drinks />
          </Suspense>
        } />
        <Route path="/staff-login" element={
          <Suspense fallback={null}>
            <StaffLogin />
          </Suspense>
        } />
      </Routes>
    </Layout>
  );
}

export default App;