import React from 'react';
import { Input } from '../ui/input';
import FooterIcons from './FooterIcons';

const FooterContent = () => {
  return (
    <>
      <div className="flex  flex-col lg:flex-row items-center gap-9 w-full lg:mt-16 lg:mb-12">
        <div className="flex  flex-col items-center gap-9 lg:w-[50%] lg:items-start">
          <h4 className="green-title ">Contact us:</h4>
          <div className="flex flex-col items-center lg:items-start gap-3">
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p className="text-center lg:text-left">
              Address: 1234 Main St{' '}
              <span className="block">
                Moonstone City, Stardust State 12345
              </span>
            </p>
          </div>
        </div>
        {/* Subscribe */}
        <div className="bg-dark-100 p-7 self-stretch mx-5 rounded-xl lg:w-[80%]">
          <Input
            type="email"
            placeholder="Email"
            className="min-h-16 border-white text-white placeholder:text-white py-[21px] px-[25px] rounded-[14px]"
          />
          <button className="button-green">Subscribe to news</button>
        </div>
        <FooterIcons className="hidden" />
      </div>

      <div className="space-y-4 text-center lg:text-left lg w-full">
        <span
          className={`mx-auto block h-[1px] lg:mb-12 bg-white transition-all duration-500 w-full`}
        ></span>
        <p className="lg:inline lg:mr-10">
          © 2023 Positivus. All Rights Reserved.
        </p>
        <p className="lg:inline">Privacy Policy</p>
      </div>
    </>
  );
};

export default FooterContent;
