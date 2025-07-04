// Service Worker for caching and offline functionality
const CACHE_NAME = 'ichimi-cache-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo.svg',
  '/assets/index.css',
  '/assets/index.js',
  '/assets/react-vendor.js',
  '/assets/ui-vendor.js'
];

// URLs to exclude from caching
const EXCLUDE_FROM_CACHE = [
  'chrome-extension',
  'googletagmanager.com',
  'google-analytics.com',
  'analytics',
  'gtag',
  'gtm'
];

// Helper function to check if URL should be cached
function shouldCache(url) {
  // Don't cache chrome-extension URLs
  if (url.startsWith('chrome-extension://')) {
    return false;
  }

  // Don't cache third-party analytics
  for (const excludePattern of EXCLUDE_FROM_CACHE) {
    if (url.includes(excludePattern)) {
      return false;
    }
  }

  return true;
}

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache if available
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip if URL shouldn't be cached
  if (!shouldCache(event.request.url)) return;

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request).then((response) => {
        // Check if we received a valid response
        if (!response || response.status !== 200) {
          return response;
        }

        // Clone the response
        const responseToCache = response.clone();

        // Add to cache
        if (shouldCache(event.request.url)) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }

        return response;
      }).catch(() => {
        // Return index.html for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('/');
        }
        return null;
      });
    })
  );
});