import Image from 'next/image';
import React from 'react';
import { type CarouselApi } from '../ui/carousel';

const Stars = ({
  api,
  currentIndex,
}: {
  api: CarouselApi;
  currentIndex: number;
}) => {
  const handleStarClick = (index: number) => {
    api?.scrollTo(index);
  };
  return (
    <div className=" flex gap-5 mx-auto">
      {[...Array(5)].map((_, index) => (
        <Image
          key={index}
          src={
            currentIndex === index ? '/icons/green-star.svg' : '/icons/star.svg'
          }
          alt="star icon"
          width={14}
          height={14}
          onClick={() => handleStarClick(index)}
        />
      ))}
    </div>
  );
};

export default Stars;
