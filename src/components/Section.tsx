import React from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  description: string;
  children: React.ReactNode;
}

const Section = ({ title, subtitle, description, children }: SectionProps) => {
  return (
    <section className="padding-x flex flex-col">
      <h2 className="green-title text-center self-center">{title}</h2>
      {subtitle && (
        <h2 className="green-title text-center self-center">{subtitle}</h2>
      )}
      <p className="mt-7 mb-10 text-center max-w-prose">{description}</p>
      {children}
    </section>
  );
};

export default Section;
