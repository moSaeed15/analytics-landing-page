'use client';
import Image from 'next/image';
import React, { useState } from 'react';

type WorkingProcessCardProps = {
  title: string;
  number: number;
  description: string;
};

const WorkingProcessCard = ({
  title,
  number,
  description,
}: WorkingProcessCardProps) => {
  const [open, setOpen] = useState(false);
  number += 1;
  // create a string with 2 digits for the number but a new variable
  const numberString = number.toString().padStart(2, '0');
  return (
    <div
      className={`dark-border rounded-4xl transition flex flex-col p-7 ${
        open ? 'bg-green' : 'bg-grey'
      } duration-300`}
    >
      <div
        className="flex gap-8 w-full items-center cursor-pointer"
        onClick={() => setOpen(prev => !prev)}
      >
        <span className="text-black text-3xl lg:text-4xl xl:text-5xl font-medium">
          {numberString}
        </span>
        <h4 className="mr-auto  lg:text-2xl  ">{title}</h4>

        {!open ? (
          <Image src="/icons/plus.svg" alt="plus-icon" width={40} height={40} />
        ) : (
          <Image
            src="/icons/minus.svg"
            alt="minus-icon"
            width={40}
            height={40}
          />
        )}
      </div>

      {/* Open Part */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <span
          className={`mx-auto block h-[1px] mt-2 lg:mt-7  bg-black transition-all duration-500   ${
            open ? 'w-full' : 'w-0'
          }`}
        ></span>
        <p className="mt-4 lg:mt-7">{description}</p>
      </div>
    </div>
  );
};

export default WorkingProcessCard;
