import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  fetchpriority?: 'high' | 'low' | 'auto';
  sizes?: string;
  srcSet?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="100%25" height="100%25" fill="%23f0f0f0"/%3E%3C/svg%3E',
  width,
  height,
  loading = 'lazy',
  fetchpriority = 'auto',
  sizes,
  srcSet,
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Native lazy loading supported
    if ('loading' in HTMLImageElement.prototype) {
      setImageSrc(src);
      return;
    }

    // Use Intersection Observer for older browsers
    if (!imageRef) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load the actual image
            const img = new Image();
            img.src = src;
            if (srcSet) img.srcset = srcSet;
            if (sizes) img.sizes = sizes;

            img.onload = () => {
              setImageSrc(src);
              setIsLoaded(true);
              observerRef.current?.disconnect();
            };
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.01,
      }
    );

    observerRef.current.observe(imageRef);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [imageRef, src, srcSet, sizes, placeholder]);

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
      width={width}
      height={height}
      loading={loading}
      fetchpriority={fetchpriority}
      sizes={sizes}
      srcSet={isLoaded ? srcSet : undefined}
      style={{
        transition: 'opacity 0.3s ease-in-out',
        opacity: isLoaded ? 1 : 0.8,
      }}
      decoding="async"
    />
  );
};