import Image from 'next/image';
import React from 'react';

const Stars = () => {
  return (
    <div className=" flex gap-5 mx-auto">
      <Image src="/icons/star.svg" alt="star icon" width={14} height={14} />
      <Image src="/icons/star.svg" alt="star icon" width={14} height={14} />
      <Image src="/icons/star.svg" alt="star icon" width={14} height={14} />
      <Image src="/icons/star.svg" alt="star icon" width={14} height={14} />
      <Image src="/icons/star.svg" alt="star icon" width={14} height={14} />
    </div>
  );
};

export default Stars;
