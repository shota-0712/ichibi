import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

// Service Worker registration
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration.scope);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }, 3000);
  });
}

// Render app
const renderApp = () => {
  const root = document.getElementById('root');
  if (root) {
    createRoot(root).render(
      <StrictMode>
        <HelmetProvider>
          <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <App />
          </BrowserRouter>
        </HelmetProvider>
      </StrictMode>
    );
  }
};

// フォントの読み込みを確実にする
if (document.fonts) {
  // フォントを明示的に読み込む
  const loadFont = () => {
    if (document.fonts.load) {
      document.fonts.load('400 1em "Yuji Syuku"').then(() => {
        document.documentElement.classList.add('fonts-loaded');
        // フォントが読み込まれたら、すべての要素に再適用を促す
        document.body.style.fontFamily = document.body.style.fontFamily;
      }).catch(() => {
        // フォント読み込み失敗時はフォールバックを使用
      });
    }
  };
  
  // 即座に読み込みを試みる
  loadFont();
  
  // フォントが読み込まれるまで待つ
  if (document.fonts.ready) {
    document.fonts.ready.then(() => {
      if (document.fonts.check('1em "Yuji Syuku"')) {
        document.documentElement.classList.add('fonts-loaded');
      }
    });
  }
}

// パフォーマンス最適化: DOMContentLoadedを待たずに即座にレンダリング
// これによりFCP（First Contentful Paint）が改善される
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp, { once: true });
} else {
  renderApp();
}