import { lazy, Suspense } from 'react';
import { HeroSection } from '../components/home/hero-section';
import { SocialWidgetLoader } from '../components/social/social-widget-loader';

// 可視時に読み込むため遅延ロード
const FeaturedSections = lazy(() => import('../components/home/featured-sections').then(m => ({ default: m.FeaturedSections })));
const BrandStory = lazy(() => import('../components/home/brand-story').then(m => ({ default: m.BrandStory })));
const ReviewsSection = lazy(() => import('../components/home/reviews-section').then(m => ({ default: m.ReviewsSection })));
const SocialFeed = lazy(() => import('../components/social/social-feed').then(m => ({ default: m.SocialFeed })));

import { LazyInView } from '../components/ui/LazyInView';

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
        <LazyInView rootMargin="400px">
          <ReviewsSection />
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