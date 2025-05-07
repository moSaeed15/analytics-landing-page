import Image from 'next/image';

const HeaderContent = () => {
  return (
    <div className=" padding-x flex flex-col justify-center items-center mt-8">
      <h1>Navigating the digital landscape for success</h1>
      <Image
        src="/illustrations/hero-mob.svg"
        width={360}
        height={310}
        alt="hero"
        priority
        className="mt-2 mb-5 w-96 h-auto"
      />
      <p className="max-w-prose">
        Our digital marketing agency helps businesses grow and succeed online
        through a range of services including SEO, PPC, social media marketing,
        and content creation.
      </p>
      <button className="button-dark mt-10">Book a consultation</button>
    </div>
  );
};

export default HeaderContent;
