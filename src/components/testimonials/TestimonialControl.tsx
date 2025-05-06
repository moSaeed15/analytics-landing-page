import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Stars from './Stars';
import { CarouselApi } from '../ui/carousel';

const TestimonialControl = ({ api }: { api: CarouselApi }) => {
  const [currentIndex, setCurrentIndex] = useState(
    api?.selectedScrollSnap() || 0
  );

  useEffect(() => {
    if (!api) return;

    const updateCurrentIndex = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    // Add an event listener to track changes in the selected index
    api.on('select', updateCurrentIndex);

    // Cleanup the event listener when the component unmounts
    return () => {
      api.off('select', updateCurrentIndex);
    };
  }, [api]);

  return (
    <div className=" flex mt-14">
      <Image
        src="/icons/arrow-left.svg"
        alt="arrow left"
        width={20}
        height={20}
        onClick={() => api?.scrollPrev()}
        className={` ${
          currentIndex !== 0 ? 'invert-0 cursor-pointer' : 'invert-50'
        }`}
      />

      <Stars api={api} currentIndex={currentIndex} />

      <Image
        src="/icons/arrow-right.svg"
        alt="arrow right"
        width={20}
        height={20}
        onClick={() => api?.scrollNext()}
        className={` ${
          currentIndex !== 4 ? 'invert-0 cursor-pointer' : 'invert-50'
        }`}
      />
    </div>
  );
};

export default TestimonialControl;
