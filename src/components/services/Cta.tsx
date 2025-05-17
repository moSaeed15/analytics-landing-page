import Image from 'next/image';

const Cta = () => {
  return (
    <div className="mt-16 lg:mt-20 xl:mt-24 bg-grey rounded-4xl p-12 xl:p-14 flex relative">
      <div className=" w-full">
        <h3>Let’s make things happen</h3>
        <p className=" max-w-prose lg:max-w-[40ch] my-5">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <button className="button-dark lg:w-[50%] ">
          Get your free proposal
        </button>
      </div>
      <Image
        src="/illustrations/cta.svg"
        alt="service-image"
        className="absolute -top-10 lg:right-20 xl:right-36 hidden lg:inline"
        width={360}
        height={400}
      />
    </div>
  );
};

export default Cta;
