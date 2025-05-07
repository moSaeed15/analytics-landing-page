import Image from 'next/image';
import React from 'react';
import FooterIcons from './FooterIcons';

const FooterHeader = () => {
  return (
    <>
      <Image src="/icons/logo-white.svg" width={180} height={30} alt="logo" />
      <ul className="flex flex-col gap-3">
        <li>About us</li>
        <li>Services</li>
        <li>Use Cases</li>
        <li>Pricing</li>
      </ul>
      <div className="hidden lg:flex gap-5 items-center">
        <FooterIcons />
      </div>
    </>
  );
};

export default FooterHeader;
