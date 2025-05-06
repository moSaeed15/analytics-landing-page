import React from 'react';
import CaseStudiesCards from './CaseStudiesCards';

const CaseStudies = () => {
  return (
    <section className="padding-x flex flex-col  ">
      <h2 className="green-title text-center  self-center">Case Studies</h2>
      <p className="mt-7 mb-10  text-center max-w-prose">
        Explore Real-Life Examples of Our Proven Digital Marketing Success
        through Our Case Studies
      </p>
      <CaseStudiesCards />
    </section>
  );
};

export default CaseStudies;
