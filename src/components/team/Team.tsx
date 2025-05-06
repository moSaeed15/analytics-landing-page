import React from 'react';
import Section from '../Section';
import TeamMembers from './TeamMembers';

const Team = () => {
  return (
    <Section
      title="Team"
      description="Meet the skilled and experienced team behind our successful digital marketing strategies"
    >
      <TeamMembers />
    </Section>
  );
};

export default Team;
