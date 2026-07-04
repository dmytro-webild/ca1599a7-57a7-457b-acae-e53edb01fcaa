// Created by add_section_from_catalog (TeamListCards).

import React from 'react';
import TeamListCards from '@/components/sections/team/TeamListCards';

export default function TeamSection(): React.JSX.Element {
  return (
    <div data-webild-section="team" data-section="team" id="team">
      <TeamListCards
        tag="Our Team"
        title="Meet the Team"
        description="We are a group of passionate individuals."
        groups={[]}
        textAnimation="slide-up"
      />
    </div>
  );
}