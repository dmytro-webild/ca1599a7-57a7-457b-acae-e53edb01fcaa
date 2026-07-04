// Created by add_section_from_catalog (HeroSplitVerticalMarquee).

import React from 'react';
import HeroSplitVerticalMarquee from '@/components/sections/hero/HeroSplitVerticalMarquee';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroSplitVerticalMarquee
        rightItems={[{"imageSrc":"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"},{"imageSrc":"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"},{"imageSrc":"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"}]}
        primaryButton={{"text":"Start Your Project","href":"#contact"}}
        title="Your Vision, Built Digital."
        textAnimation="fade-blur"
        secondaryButton={{"href":"#showcase","text":"View Case Studies"}}
        description="VisionWeb transforms ambitious ideas into high-performing websites. We combine strategic design with conversion-focused development to drive real business results."
        leftItems={[{"imageSrc":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"},{"imageSrc":"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"},{"imageSrc":"https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"}]}
        tag="VisionWeb"
      />
    </div>
  );
}
