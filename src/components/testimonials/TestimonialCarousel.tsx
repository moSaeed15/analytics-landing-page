'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

import TestimonialCard from './TestimonialCard';
import { useState } from 'react';
import TestimonialControl from './TestimonialControl';

const TestimonialCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <div className="mx-auto  ">
      <div className="bg-dark text-white p-8 rounded-4xl max-w-[450px] sm:max-w-full mx-auto">
        {/* Content */}

        <Carousel setApi={setApi} className=" ">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="max-w-[90%] lg:max-w-[50%] mx-5"
              >
                <TestimonialCard />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Control */}
        <TestimonialControl api={api} />
      </div>
    </div>
  );
};

export default TestimonialCarousel;
