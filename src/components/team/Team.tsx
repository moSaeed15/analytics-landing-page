import React from 'react';
import Section from '../Section';
import TeamMembers from './TeamMembers';

const Team = () => {
  return (
    <Section
      title="Team"
      className="lg:mt-32 xl:mt-36"
      description="Meet the skilled and experienced team behind our successful digital marketing strategies"
    >
      <TeamMembers />
    </Section>
  );
};

export default Team;
