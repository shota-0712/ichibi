import { useEffect, useRef, useCallback } from 'react';

type PerformanceMetrics = {
  dns: number;
  tcp: number;
  ttfb: number;
  domLoad: number;
  windowLoad: number;
};

type WorkerResponseMessage =
  | { type: 'PERFORMANCE_DATA'; data: PerformanceMetrics }
  | { type: 'IMAGES_PRELOADED'; data: string[] }
  | { type: 'RESOURCES_CACHED'; data: string[] }
  | { type: 'CACHE_ERROR'; error?: string };

type WorkerRequestMessage =
  | { type: 'TRACK_PERFORMANCE'; data: PerformanceMetrics }
  | { type: 'PRELOAD_IMAGES'; data: string[] }
  | { type: 'CACHE_RESOURCES'; data: string[] };

export const useWebWorker = () => {
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    // Initialize Web Worker
    if (typeof Worker !== 'undefined' && !workerRef.current) {
      workerRef.current = new Worker('/worker.js');

      // Handle messages from worker
      workerRef.current.onmessage = (event: MessageEvent<WorkerResponseMessage>) => {
        const message = event.data;

        switch (message.type) {
          case 'PERFORMANCE_DATA':
            // Handle performance data
            if (window.gtag) {
              window.gtag('event', 'performance_metrics', message.data);
            }
            break;
          case 'IMAGES_PRELOADED':
            if (window.gtag) {
              window.gtag('event', 'worker_images_preloaded', {
                count: message.data.length,
              });
            }
            break;
          case 'RESOURCES_CACHED':
            if (window.gtag) {
              window.gtag('event', 'worker_resources_cached', {
                count: message.data.length,
              });
            }
            break;
          case 'CACHE_ERROR':
            if (window.gtag) {
              window.gtag('event', 'worker_cache_error', {
                message: message.error ?? 'unknown',
              });
            }
            break;
          default:
            break;
        }
      };

      // Track initial performance metrics
      if (window.performance && window.performance.timing) {
        const timing = window.performance.timing;
        const metrics: PerformanceMetrics = {
          dns: timing.domainLookupEnd - timing.domainLookupStart,
          tcp: timing.connectEnd - timing.connectStart,
          ttfb: timing.responseStart - timing.navigationStart,
          domLoad: timing.domContentLoadedEventEnd - timing.navigationStart,
          windowLoad: timing.loadEventEnd - timing.navigationStart,
        };

        const message: WorkerRequestMessage = {
          type: 'TRACK_PERFORMANCE',
          data: metrics,
        };

        workerRef.current.postMessage(message);
      }

      // Preload non-critical images
      const imagesToPreload = [
        '/image/tenjuu.webp',
        '/image/ichigo_ichibi_set.webp',
        '/image/open_chirashi.webp',
      ];

      workerRef.current.postMessage({
        type: 'PRELOAD_IMAGES',
        data: imagesToPreload,
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
        data: resourcesToCache,
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

  const sendMessage = useCallback((message: WorkerRequestMessage) => {
    if (workerRef.current) {
      workerRef.current.postMessage(message);
    }
  }, []);

  return { sendMessage };
};

// Type declarations for gtag
declare global {
  interface Window {
    // eslint-disable-next-line no-unused-vars
    gtag?: (...args: unknown[]) => void;
  }
}
