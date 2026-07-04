// Created by add_section_from_catalog (TeamListCards).

import React from 'react';
import TeamListCards from '@/components/sections/team/TeamListCards';

export default function TeamSection(): React.JSX.Element {
  return (
    <div data-webild-section="team" data-section="team" id="team">
      <TeamListCards
        tag="…"
        title="…"
        description="…"
        groups={[]}
        textAnimation="…"
      />
    </div>
  );
}
