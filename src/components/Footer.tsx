import React from 'react';
import FooterHeader from './footer/FooterHeader';
import FooterContent from './footer/FooterContent';

const Footer = () => {
  return (
    <footer className="bg-dark mt-24 padding-x pt-12 pb-7 text-white flex flex-col items-center gap-9">
      <FooterHeader />
      {/* Footer Content */}
      <FooterContent />
      {/* Footer Copywright and privacy policy */}
    </footer>
  );
};

export default Footer;
