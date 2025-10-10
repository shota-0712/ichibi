import { useEffect, useRef, useCallback } from 'react';

interface WorkerMessage {
  type: string;
  data?: any;
  error?: string;
}

export const useWebWorker = () => {
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    // Initialize Web Worker
    if (typeof Worker !== 'undefined' && !workerRef.current) {
      workerRef.current = new Worker('/worker.js');

      // Handle messages from worker
      workerRef.current.onmessage = (e: MessageEvent<WorkerMessage>) => {
        const { type, data, error } = e.data;

        switch (type) {
          case 'PERFORMANCE_DATA':
            // Handle performance data
            if (window.gtag) {
              window.gtag('event', 'performance_metrics', data);
            }
            break;
          case 'IMAGES_PRELOADED':
            console.info(`Preloaded ${data.length} images`);
            break;
          case 'RESOURCES_CACHED':
            console.info(`Cached ${data.length} resources`);
            break;
          case 'CACHE_ERROR':
            console.error('Cache error:', error);
            break;
          default:
            break;
        }
      };

      // Track initial performance metrics
      if (window.performance && window.performance.timing) {
        const timing = window.performance.timing;
        const metrics = {
          dns: timing.domainLookupEnd - timing.domainLookupStart,
          tcp: timing.connectEnd - timing.connectStart,
          ttfb: timing.responseStart - timing.navigationStart,
          domLoad: timing.domContentLoadedEventEnd - timing.navigationStart,
          windowLoad: timing.loadEventEnd - timing.navigationStart,
        };

        workerRef.current.postMessage({
          type: 'TRACK_PERFORMANCE',
          data: metrics
        });
      }

      // Preload non-critical images
      const imagesToPreload = [
        '/image/soba.webp',
        '/image/ichigo_ichibi_set.webp',
        '/image/open_chirashi.webp',
      ];

      workerRef.current.postMessage({
        type: 'PRELOAD_IMAGES',
        data: imagesToPreload
      });

      // Cache critical resources for offline support
      const resourcesToCache = [
        '/',
        '/menu',
        '/store-info',
        '/fonts/yuji-syuku/yuji-syuku.woff2',
      ];

      workerRef.current.postMessage({
        type: 'CACHE_RESOURCES',
        data: resourcesToCache
      });
    }

    // Cleanup
    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
        workerRef.current = null;
      }
    };
  }, []);

  const sendMessage = useCallback((message: WorkerMessage) => {
    if (workerRef.current) {
      workerRef.current.postMessage(message);
    }
  }, []);

  return { sendMessage };
};

// Type declarations for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}