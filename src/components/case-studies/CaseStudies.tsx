import React from 'react';
import CaseStudiesCards from './CaseStudiesCards';
import Section from '../Section';
import CaseStudiesDesktop from './CaseStudiesDesktop';

const CaseStudies = () => {
  return (
    <Section
      title="Case Studies"
      className="mt-32 xl:mt-36"
      description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
    >
      <CaseStudiesCards />
      <CaseStudiesDesktop />
    </Section>
  );
};

export default CaseStudies;
