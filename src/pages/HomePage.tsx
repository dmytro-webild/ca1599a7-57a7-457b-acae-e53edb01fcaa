// AUTO-GENERATED shell by per-section-migrate.
// Section bodies live in the sibling sections/ folder (one file per section).
// Edit those section files directly. Non-block content (wrappers,
// non-inlinable sections) is preserved inline; extracted section blocks
// become component refs.

import React from 'react';
import HeroSection from './HomePage/sections/Hero';
import contactSection from './HomePage/sections/contact';
import ShowcaseSection from './HomePage/sections/Showcase';
import MetricsSection from './HomePage/sections/Metrics';
import TeamSection from './HomePage/sections/Team';
import TestimonialsSection from './HomePage/sections/Testimonials';
import FaqSection from './HomePage/sections/Faq';
import ContactSection from './HomePage/sections/Contact';

export default function HomePage(): React.JSX.Element {
  return (
<>
  <HeroSection />

  <contactSection />

  <ShowcaseSection />

  <MetricsSection />

  <TeamSection />

  <TestimonialsSection />

  <FaqSection />

  <ContactSection />
    </>
  );
}
