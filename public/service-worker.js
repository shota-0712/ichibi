// Service Worker for caching and offline functionality
// Auto-versioned cache name to ensure updates on each deployment
const CACHE_VERSION = '20260124-1'; // Update this on each deployment
const CACHE_NAME = `ichimi-cache-v${CACHE_VERSION}`;
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/index.css',
  '/assets/index.js',
  '/assets/react-vendor.js',
  '/assets/ui-vendor.js',
  // Ensure local font CSS is available offline（フォント本体は初回はキャッシュしない）
  '/fonts/yuji-syuku/yuji-syuku.css'
];

// URLs to exclude from caching
const EXCLUDE_FROM_CACHE = [
  'chrome-extension',
  'googletagmanager.com',
  'google-analytics.com',
  // Exclude remote Google Fonts from cache
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'analytics',
  'gtag',
  'gtm',
  // Do not cache images to avoid stale assets during development
  '.webp',
  '.png',
  '.jpg',
  '.jpeg',
  '.svg'
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

// Listen for SKIP_WAITING message
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // addAll は1つでも404があると失敗するため、個別に安全に追加
      await Promise.all(
        STATIC_ASSETS.map(async (url) => {
          try {
            const res = await fetch(url, { cache: 'no-cache' });
            if (res && res.ok) {
              await cache.put(url, res.clone());
            }
          } catch (e) {
            // ignore missing assets
          }
        })
      );
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

// Helper function to check if request is for HTML
function isHTMLRequest(request) {
  const url = new URL(request.url);
  return request.mode === 'navigate' ||
         request.headers.get('Accept')?.includes('text/html') ||
         url.pathname === '/' ||
         url.pathname.endsWith('.html');
}

// Fetch event - Network First for HTML, Cache First for static assets
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip if URL shouldn't be cached
  if (!shouldCache(event.request.url)) return;

  // Network First strategy for HTML (always get fresh content)
  if (isHTMLRequest(event.request)) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Check if we received a valid response
          if (!response || response.status !== 200) {
            return response;
          }

          // Clone and cache the response
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          // If network fails, fall back to cache (offline support)
          return caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || caches.match('/');
          });
        })
    );
  }
  // Cache First strategy for static assets (JS, CSS, images with hashed names)
  else {
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
          return null;
        });
      })
    );
  }
});
