import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';

// Use React.lazy with improved loading strategy
const Lunch = lazy(() => 
  import('./pages/Lunch').then(module => ({ default: module.Lunch }))
);
const Izakaya = lazy(() => 
  import('./pages/Izakaya').then(module => ({ default: module.Izakaya }))
);
const StoreInfo = lazy(() => 
  import('./pages/StoreInfo').then(module => ({ default: module.StoreInfo }))
);
const Drinks = lazy(() => 
  import('./pages/Drinks').then(module => ({ default: module.Drinks }))
);


// Preload components based on user interaction
const preloadComponent = (component: string): void => {
  switch(component) {
    case 'lunch':
      void import('./pages/Lunch');
      // Preload hero image
      new Image().src = '/image/soba.webp';
      break;
    case 'izakaya':
      void import('./pages/Izakaya');
      new Image().src = '/image/yakitori.webp';
      break;
    case 'store-info':
      void import('./pages/StoreInfo');
      break;
    case 'drinks':
      void import('./pages/Drinks');
      new Image().src = '/image/nihonnshu.webp';
      break;
  }
};

// マウスホバー時のプリロードは低速端末でコストになるため、初回インタラクション後に一度だけ計画的に実行
if (typeof window !== 'undefined') {
  const triggerPlannedPreload = () => {
    // 最初のユーザー操作から少し待ってまとめてプリロード
    setTimeout(() => {
      ['lunch', 'izakaya', 'store-info', 'drinks'].forEach(preloadComponent);
    }, 800);
    events.forEach((evt) => window.removeEventListener(evt, triggerPlannedPreload));
  };
  const events: Array<keyof WindowEventMap> = ['click', 'touchstart', 'keydown'];
  events.forEach((evt) => window.addEventListener(evt, triggerPlannedPreload, { once: true, passive: true }));
}

function App() {
  return (
    <Layout>
      <Routes>
        {/* Only Home is eagerly loaded */}
        <Route path="/" element={<Home />} />
        
        {/* All other routes are lazy loaded */}
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

      </Routes>
    </Layout>
  );
}

export default App;