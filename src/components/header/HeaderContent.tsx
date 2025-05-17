import Image from 'next/image';

const HeaderContent = () => {
  return (
    <div className=" padding-x flex lg:flex-row mt-8 justify-between">
      <div className="flex flex-col  justify-center  items-center lg:items-start mx-auto lg:mx-0">
        <h1 className="xs:text-center md:max-w-[25ch] lg:text-start xl:max-w-[15ch]  ">
          Navigating the digital landscape for success
        </h1>
        <Image
          src="/illustrations/hero-mob.svg"
          width={360}
          height={310}
          alt="hero"
          priority
          className="mt-2 mb-5  w-96 h-auto lg:hidden"
        />
        <p className="max-w-prose lg:mt-9 xl:text-xl xl:max-w-[50ch]">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button className="button-dark mt-10 lg:w-[50%]  xl:w-[40%] max-w-2xl">
          Book a consultation
        </button>
      </div>{' '}
      <Image
        src="/illustrations/hero.svg"
        width={500}
        height={500}
        alt="hero"
        priority
        className="hidden lg:inline-block mt-2 mb-5  lg:w-[50%] max-w-[600px] "
      />
    </div>
  );
};

export default HeaderContent;
