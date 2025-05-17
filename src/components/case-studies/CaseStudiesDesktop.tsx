import { caseStudies } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CaseStudiesDesktop = () => {
  return (
    <div className="lg:flex bg-dark hidden py-[70px] px-16 text-white rounded-4xl">
      {caseStudies.map((caseStudy, index) => (
        <>
          <div className="flex flex-col" key={caseStudy.id}>
            <p>{caseStudy.description}</p>
            <Link href="" className="text-green flex gap-4 mt-7">
              Learn more
              <Image
                src="/icons/arrow-green.svg"
                width={20}
                height={20}
                alt="arrow"
                className="h-5 w-5"
              />
            </Link>
          </div>
          {caseStudies.length - 1 !== index && (
            <span
              className={` block h-[186px]  bg-white transition-all duration-500  w-1 mx-16`}
            ></span>
          )}
        </>
      ))}
    </div>
  );
};

export default CaseStudiesDesktop;
