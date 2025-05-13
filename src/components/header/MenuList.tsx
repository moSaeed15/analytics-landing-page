import Link from 'next/link';
import React from 'react';

export const ListItem = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  return (
    <li className={`${className} whitespace-nowrap border-none`}>
      <Link
        href={text.toLowerCase().replace(/\s+/g, '-')}
        className="  block p-2 hover:bg-green rounded transition-all duration-100  border border-transparent hover:border-dark hover:border"
      >
        {text}
      </Link>
    </li>
  );
};

const MenuList = () => {
  return (
    <ul className="flex flex-col md:flex-row space-y-5 justify-center items-center w-full">
      <ListItem text="About us" className="text-lg xl:text-xl " />
      <ListItem text="Services" className="text-lg xl:text-xl " />
      <ListItem text="Use Cases" className="text-lg xl:text-xl " />
      <ListItem text="Pricing" className="text-lg xl:text-xl " />
      <button className="button-white rounded-xl hidden md:block">
        {' '}
        Request a quote
      </button>
    </ul>
  );
};

export default MenuList;
