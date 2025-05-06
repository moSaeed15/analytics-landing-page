'use client';
import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import Image from 'next/image';

const TestimonialCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  return (
    <div className="mx-auto max-w-sm ">
      <Carousel setApi={setApi} className="w-full ">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="bg-dark text-white p-8 rounded-4xl">
                <p>
                  &ldquo;We have been working with Positivus for the past year
                  and have seen a significant increase in website traffic and
                  leads as a result of their efforts. The team is professional,
                  responsive, and truly cares about the success of our business.
                  We highly recommend Positivus to any company looking to grow
                  their online presence.&rdquo;
                </p>
                <div className=" flex">
                  <Image
                    src="/icons/arrow-left.svg"
                    alt="arrow left"
                    width={20}
                    height={20}
                    className=""
                  />

                  <div className=""></div>
                  <Image
                    src="/icons/arrow-right.svg"
                    alt="arrow right"
                    width={20}
                    height={20}
                    className=""
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
