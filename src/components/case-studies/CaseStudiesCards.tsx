import { caseStudies } from '@/constants';
import React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import CaseStudyCard from './CaseStudyCard';

const CaseStudiesCards = () => {
  return (
    <div className="lg:hidden ">
      <Carousel>
        <CarouselContent>
          {caseStudies.map(caseStudy => (
            <CarouselItem
              key={caseStudy.id}
              className="basis-[80%] min-h-[250px] pl-5"
            >
              <CaseStudyCard text={caseStudy.description} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CaseStudiesCards;
