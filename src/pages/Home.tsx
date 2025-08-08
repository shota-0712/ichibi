import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { HeroSection } from '../components/home/hero-section';
import { SocialWidgetLoader } from '../components/social/social-widget-loader';

// 可視時に読み込むため遅延ロード
const FeaturedSections = lazy(() => import('../components/home/featured-sections').then(m => ({ default: m.FeaturedSections })));
const BrandStory = lazy(() => import('../components/home/brand-story').then(m => ({ default: m.BrandStory })));
const SocialFeed = lazy(() => import('../components/social/social-feed').then(m => ({ default: m.SocialFeed })));

function LazyInView({ children, rootMargin = '200px' }: { children: React.ReactNode; rootMargin?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return; // 1度表示したら終了
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      // 環境非対応時は即表示
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries.some(e => e.isIntersecting)) {
        setVisible(true);
        observer.disconnect();
      }
    }, { root: null, rootMargin, threshold: 0.01 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible, rootMargin]);

  return (
    <div ref={ref} data-lazy-section>
      {visible ? children : null}
    </div>
  );
}

export function Home() {
  return (
    <div>
      <SocialWidgetLoader />
      <HeroSection />
      <Suspense fallback={null}>
        <LazyInView>
          <FeaturedSections />
        </LazyInView>
      </Suspense>
      <Suspense fallback={null}>
        <LazyInView>
          <BrandStory />
        </LazyInView>
      </Suspense>
      <Suspense fallback={null}>
        <LazyInView>
          <SocialFeed />
        </LazyInView>
      </Suspense>
    </div>
  );
}