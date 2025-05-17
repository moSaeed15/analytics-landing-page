import Image from 'next/image';
import React from 'react';
import FooterIcons from './FooterIcons';

const FooterHeader = () => {
  return (
    <div className=" flex  flex-col lg:flex-row items-center gap-9 justify-between w-full">
      <Image src="/icons/logo-white.svg" width={180} height={30} alt="logo" />
      <ul className="flex flex-col lg:flex-row  gap-3 lg:gap-10 lg:text-lg underline underline-offset-3">
        <li>About us</li>
        <li>Services</li>
        <li>Use Cases</li>
        <li>Pricing</li>
      </ul>
      <div className="hidden lg:flex gap-5 items-center">
        <FooterIcons />
      </div>
    </div>
  );
};

export default FooterHeader;
