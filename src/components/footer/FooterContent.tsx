import React from 'react';
import { Input } from '../ui/input';
import FooterIcons from './FooterIcons';

const FooterContent = () => {
  return (
    <>
      <h4 className="green-title ">Contact us:</h4>
      <div className="flex flex-col items-center gap-3">
        <p>Email: info@positivus.com</p>
        <p>Phone: 555-567-8901</p>
        <p className="text-center">
          Address: 1234 Main St{' '}
          <span className="block">Moonstone City, Stardust State 12345</span>
        </p>
      </div>
      {/* Subscribe */}
      <div className="bg-dark-100 p-7 self-stretch mx-5 rounded-xl">
        <Input
          type="email"
          placeholder="Email"
          className="min-h-16 border-white text-white placeholder:text-white py-[21px] px-[25px] rounded-[14px]"
        />
        <button className="button-green">Subscribe to news</button>
      </div>
      <FooterIcons />
      <span
        className={`mx-auto block h-[1px]  bg-white transition-all duration-500 w-full`}
      ></span>
      <div className="space-y-4 text-center">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <p>Privacy Policy</p>
      </div>
    </>
  );
};

export default FooterContent;
