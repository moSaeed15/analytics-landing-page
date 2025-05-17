import Image from 'next/image';
import React from 'react';

type ServiceCardProps = {
  className: string;
  image: string;
  textClassName: string;
  icon: string;
  title: string;
};

const ServiceCard = ({
  className,
  image,
  textClassName,
  icon,
  title,
}: ServiceCardProps) => {
  const words = title.split(' ');
  const lastWord = words.pop(); // Extract the last word
  const restOfTitle = words.join(' '); // Join the remaining words
  const LearnMoreStyle =
    title === 'Social Media Marketing' || title === 'Analytics and Tracking'
      ? 'text-white'
      : 'text-black';
  return (
    <div
      className={`flex flex-col lg:flex-row justify-between  p-12 rounded-4xl ${className} `}
    >
      <div className="flex flex-col h-full">
        <h3 className={`${textClassName} w-fit rounded-lg`}>{restOfTitle}</h3>
        <h3 className={`${textClassName} w-fit rounded-lg`}> {lastWord}</h3>
        <div className="mt-auto hidden lg:flex gap-3.5 items-center">
          <Image
            src={icon}
            alt="arrow-icon"
            width={41}
            height={41}
            className=" w-10 h-10 "
          />
          <p className={` hidden lg:block text-xl ${LearnMoreStyle}`}>
            Learn More
          </p>
        </div>
      </div>
      <div className="flex justify-between lg:hidden">
        <Image
          src={icon}
          alt="arrow-icon"
          width={41}
          height={41}
          className="self-end w-10 h-10 "
        />
        <Image
          src={image}
          alt="service-image"
          width={165}
          height={130}
          className="w-40 h-32"
        />
      </div>

      <Image
        src={image}
        alt="service-image"
        width={165}
        height={130}
        className="w-40 h-32 xl:w-52 xl:h-40 hidden lg:inline "
      />
    </div>
  );
};

export default ServiceCard;
