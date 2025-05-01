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

  return (
    <div className={` flex flex-col p-12 rounded-lg ${className} `}>
      <h3 className={`${textClassName} w-fit rounded-lg`}>{restOfTitle}</h3>
      <h3 className={`${textClassName} w-fit rounded-lg`}> {lastWord}</h3>

      <div className="flex justify-between">
        <Image src={icon} alt="arrow-icon" width={41} height={41} />
        <Image src={image} alt="service-image" width={165} height={130} />
      </div>
    </div>
  );
};

export default ServiceCard;
