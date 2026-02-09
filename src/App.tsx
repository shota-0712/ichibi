import { Suspense, lazy } from 'react';
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

// Philosophy sub-pages
const SobaTypes = lazy(() =>
  import('./pages/philosophy/SobaTypes').then(module => ({ default: module.SobaTypes }))
);
const Vision = lazy(() =>
  import('./pages/philosophy/Vision').then(module => ({ default: module.Vision }))
);
const Space = lazy(() =>
  import('./pages/philosophy/Space').then(module => ({ default: module.Space }))
);
const Tsuyu = lazy(() =>
  import('./pages/philosophy/Tsuyu').then(module => ({ default: module.Tsuyu }))
);
const DailyCraft = lazy(() =>
  import('./pages/philosophy/DailyCraft').then(module => ({ default: module.DailyCraft }))
);
const Health = lazy(() =>
  import('./pages/philosophy/Health').then(module => ({ default: module.Health }))
);
const Juwari = lazy(() =>
  import('./pages/philosophy/Juwari').then(module => ({ default: module.Juwari }))
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

          {/* Philosophy sub-pages */}
          <Route path="/dining-philosophy/soba-types" element={
            <Suspense fallback={null}>
              <SobaTypes />
            </Suspense>
          } />
          <Route path="/dining-philosophy/vision" element={
            <Suspense fallback={null}>
              <Vision />
            </Suspense>
          } />
          <Route path="/dining-philosophy/space" element={
            <Suspense fallback={null}>
              <Space />
            </Suspense>
          } />
          <Route path="/dining-philosophy/tsuyu" element={
            <Suspense fallback={null}>
              <Tsuyu />
            </Suspense>
          } />
          <Route path="/dining-philosophy/daily-craft" element={
            <Suspense fallback={null}>
              <DailyCraft />
            </Suspense>
          } />
          <Route path="/dining-philosophy/health" element={
            <Suspense fallback={null}>
              <Health />
            </Suspense>
          } />
          <Route path="/dining-philosophy/juwari" element={
            <Suspense fallback={null}>
              <Juwari />
            </Suspense>
          } />

        </Routes>
      </Layout>
    </>
  );
}

export default App;
