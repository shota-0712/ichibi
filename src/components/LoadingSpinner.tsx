import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cream">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-elegant-gold"></div>
    </div>
  );
}