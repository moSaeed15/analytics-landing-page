import React from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  description: string;
  className?: string;
  children: React.ReactNode;
}

const Section = ({
  title,
  subtitle,
  description,
  className,
  children,
}: SectionProps) => {
  return (
    <section className={`padding-x ${className}`}>
      <div className="flex flex-col lg:flex-row lg:mb-20">
        <h2 className="green-title text-center self-center lg:text-start">
          {title}
        </h2>
        {subtitle && (
          <h2 className="green-title text-center  self-center">{subtitle}</h2>
        )}
        <p className="mt-7 mb-10 lg:mt-0 lg:mb-0 text-center lg:text-start lg:ml-10 max-w-prose xl:max-w-[50ch] self-center">
          {description}
        </p>
      </div>
      {children}
    </section>
  );
};

export default Section;
