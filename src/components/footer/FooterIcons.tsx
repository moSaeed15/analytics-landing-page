import Image from 'next/image';
import React from 'react';

const FooterIcons = () => {
  return (
    <div className="flex gap-5 items-center">
      <Image
        src="/icons/linkedin-white.svg"
        width={30}
        height={30}
        alt="linkedin"
      />
      <Image
        src="/icons/facebook-white.svg"
        width={30}
        height={30}
        alt="linkedin"
      />
      <Image
        src="/icons/twitter-white.svg"
        width={30}
        height={30}
        alt="linkedin"
      />
    </div>
  );
};

export default FooterIcons;
