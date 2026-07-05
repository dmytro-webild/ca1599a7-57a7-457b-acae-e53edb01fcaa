// Created by add_section_from_catalog (ContactSplitEmail).

import React from 'react';
import ContactSplitEmail from '@/components/sections/contact/ContactSplitEmail';

export default function ContactSplitEmailSection(): React.JSX.Element {
  return (
    <div data-webild-section="contact-split-email" data-section="contact-split-email" id="contact-split-email">
      <ContactSplitEmail
        tag="Newsletter"
        title="Stay in the loop"
        description="Join our newsletter to get the latest updates and exclusive offers directly in your inbox."
        inputPlaceholder="Enter your email address"
        buttonText="Subscribe"
        textAnimation="slide-up"
        imageSrc="https://picsum.photos/seed/1783175454/1200/800"
      />
    </div>
  );
}
