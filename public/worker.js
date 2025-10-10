// Performance monitoring and analytics worker
self.addEventListener('message', function(e) {
  const { type, data } = e.data;

  switch (type) {
    case 'TRACK_PERFORMANCE':
      trackPerformance(data);
      break;
    case 'PRELOAD_IMAGES':
      preloadImages(data);
      break;
    case 'CACHE_RESOURCES':
      cacheResources(data);
      break;
    default:
      break;
  }
});

// Track performance metrics
function trackPerformance(metrics) {
  // Batch performance metrics for sending to analytics
  const performanceData = {
    timestamp: Date.now(),
    metrics: metrics,
    userAgent: self.navigator.userAgent,
  };

  // Send back processed metrics
  self.postMessage({
    type: 'PERFORMANCE_DATA',
    data: performanceData
  });
}

// Preload images in the background
async function preloadImages(imageUrls) {
  const results = await Promise.allSettled(
    imageUrls.map(url => fetch(url, { mode: 'no-cors' }))
  );

  const loadedImages = results
    .filter(result => result.status === 'fulfilled')
    .map((_, index) => imageUrls[index]);

  self.postMessage({
    type: 'IMAGES_PRELOADED',
    data: loadedImages
  });
}

// Cache resources for offline access
async function cacheResources(resources) {
  if ('caches' in self) {
    try {
      const cache = await caches.open('v1-resources');
      await cache.addAll(resources);

      self.postMessage({
        type: 'RESOURCES_CACHED',
        data: resources
      });
    } catch (error) {
      self.postMessage({
        type: 'CACHE_ERROR',
        error: error.message
      });
    }
  }
}