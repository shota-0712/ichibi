/// <reference types="vite/client" />

// Google Tag Manager gtag type definitions
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
    gtmLoaded?: boolean;
  }
}

export {};
