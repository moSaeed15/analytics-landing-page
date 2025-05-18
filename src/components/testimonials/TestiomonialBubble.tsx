import Image from 'next/image';
import React from 'react';

const TestiomonialBubble = () => {
  return (
    <div className="relative  ">
      <p className="  rounded-4xl border border-green p-5  sm:p-7 text-sm sm:text-base">
        &ldquo;We have been working with Positivus for the past year and have
        seen a significant increase in website traffic and leads as a result of
        their efforts. The team is professional, responsive, and truly cares
        about the success of our business. We highly recommend Positivus to any
        company looking to grow their online presence.&rdquo;
      </p>
      <Image
        src="/icons/polygon.svg"
        width={64}
        height={36}
        alt="polygon"
        className="absolute -bottom-[26px] left-7 "
      />{' '}
    </div>
  );
};

export default TestiomonialBubble;
