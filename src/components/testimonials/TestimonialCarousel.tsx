'use client';
import * as React from 'react';

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
//   type CarouselApi,
// } from '@/components/ui/carousel';
import Image from 'next/image';
import Stars from './Stars';
import TestiomonialBubble from './TestiomonialBubble';

const TestimonialCarousel = () => {
  // const [api, setApi] = React.useState<CarouselApi>();

  return (
    <div className="mx-auto  ">
      <div className="bg-dark text-white p-8 rounded-4xl">
        {/* Content */}
        <div className="flex flex-col items-center ">
          <TestiomonialBubble />
          <div className=" mt-10">
            <h4 className="text-green">John Smith</h4>
            <p>Marketing Director at XYZ Corp</p>
          </div>
        </div>
        {/* Control */}
        <div className=" flex mt-14">
          <Image
            src="/icons/arrow-left.svg"
            alt="arrow left"
            width={20}
            height={20}
            className=""
          />

          <Stars />
          <Image
            src="/icons/arrow-right.svg"
            alt="arrow right"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
