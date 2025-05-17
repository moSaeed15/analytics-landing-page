import React from 'react';
import { ListItem } from './MenuList';

const MenuDesktop = () => {
  return (
    <ul className="hidden md:flex items-center  space-x-2 lg:space-x-4 xl:space-x-10">
      <ListItem
        text="About us"
        className="text-[17px] lg:text-lg xl:text-xl "
      />
      <ListItem
        text="Services"
        className="text-[17px] lg:text-lg xl:text-xl "
      />
      <ListItem
        text="Use Cases"
        className="text-[17px] lg:text-lg xl:text-xl "
      />
      <ListItem text="Pricing" className="text-[17px] lg:text-lg xl:text-xl " />
      <button className="button-white rounded-xl hidden md:block w-full  max-w-[230px] mt-0 px-4 xl:px-8 whitespace-nowrap">
        {' '}
        Request a quote
      </button>
    </ul>
  );
};

export default MenuDesktop;
