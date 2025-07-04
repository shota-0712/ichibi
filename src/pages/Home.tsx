import React from 'react';
import { HeroSection } from '../components/home/hero-section';
import { FeaturedSections } from '../components/home/featured-sections';
import { AccommodationSection } from '../components/home/accommodation-section';
import { SocialFeed } from '../components/social/social-feed';
import { BrandStory } from '../components/home/brand-story';
import { SocialWidgetLoader } from '../components/social/social-widget-loader';

export function Home() {
  return (
    <div>
      <SocialWidgetLoader />
      <HeroSection />
      <FeaturedSections />
      <BrandStory />
      <AccommodationSection />
      <SocialFeed />
    </div>
  );
}