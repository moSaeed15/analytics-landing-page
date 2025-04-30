import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';

const Header = () => {
  return (
    <div className=" bg-cover  h-full w-full  text-secondary">
      <Navbar />
      <div className="clip-path bg-dark-blue min-h-[80vh]">
        <Image
          className="mr-2"
          src="/hero-small.png"
          alt="hero"
          width={500}
          height={300}
          quality={100}
          priority
        />

        <div className="px-5 pr-8">
          <h1 className="text-white">
            Monitor your business on real-time dashboard
          </h1>
          <p className="mt-3.5 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est.{' '}
          </p>
          <button className="bg-red w-full py-3.5 rounded-full text-white">
            Try for free
          </button>
        </div>
      </div>

      <div className="bg-red clip-path-lg min-h-[3vh] rotate-left"></div>
    </div>
  );
};

export default Header;
