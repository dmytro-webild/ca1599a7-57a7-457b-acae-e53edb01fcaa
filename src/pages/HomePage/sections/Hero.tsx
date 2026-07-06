// Created by add_section_from_catalog (HeroSplitVerticalMarquee).

import React from 'react';
import HeroSplitVerticalMarquee from '@/components/sections/hero/HeroSplitVerticalMarquee';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroSplitVerticalMarquee
        rightItems={[{"imageSrc":"https://storage.googleapis.com/webild/users/user_3G2Ozqag2ovb8not76KWtboL8LU/uploaded-1783203211212-gz6edipc.jpg"},{"imageSrc":"https://storage.googleapis.com/webild/users/user_3G2Ozqag2ovb8not76KWtboL8LU/uploaded-1783203242557-78snp9we.jpg"},{"imageSrc":"https://storage.googleapis.com/webild/users/user_3G2Ozqag2ovb8not76KWtboL8LU/uploaded-1783203174492-g0g1g8cl.jpg"}]}
        primaryButton={{"text":"Start Your Project","href":"#contact"}}
        title="Your Vision, Built Digital."
        textAnimation="fade-blur"
        secondaryButton={{"href":"#showcase","text":"View facebook"}}
        description="VisionWeb transforms ambitious ideas into high-performing websites. We combine strategic design with conversion-focused development to drive real business results."
        leftItems={[{"imageSrc":"https://storage.googleapis.com/webild/users/user_3G2Ozqag2ovb8not76KWtboL8LU/uploaded-1783203012436-9ngcm97o.jpg"},{"imageSrc":"https://storage.googleapis.com/webild/users/user_3G2Ozqag2ovb8not76KWtboL8LU/uploaded-1783203084045-butrm1cx.jpg"},{"imageSrc":"https://storage.googleapis.com/webild/users/user_3G2Ozqag2ovb8not76KWtboL8LU/uploaded-1783203050655-38nknzxz.jpg"}]}
        tag="VisionWeb"
      />
    </div>
  );
}
