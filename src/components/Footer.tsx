import React from 'react';
import FooterHeader from './footer/FooterHeader';
import FooterContent from './footer/FooterContent';

const Footer = () => {
  return (
    <footer className=" lg:mx-10  xl:mx-24 2xl:mx-52  lg:rounded-t-4xl bg-dark mt-24 padding-x lg:px-14 xl:px-16 pt-12 pb-7 text-white flex  flex-col items-center gap-9 lg:gap-0">
      <FooterHeader />
      {/* Footer Content */}
      <FooterContent />
      {/* Footer Copywright and privacy policy */}
    </footer>
  );
};

export default Footer;
