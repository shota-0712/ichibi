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
const Contact = lazy(() =>
  import('./pages/Contact').then(module => ({ default: module.Contact }))
);
const DiningPhilosophy = lazy(() =>
  import('./pages/DiningPhilosophy').then(module => ({ default: module.DiningPhilosophy }))
);


import { useNavigationPreload } from './hooks/useNavigationPreload';

function App() {
  useNavigationPreload();
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
          <Route path="/contact" element={
            <Suspense fallback={null}>
              <Contact />
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
