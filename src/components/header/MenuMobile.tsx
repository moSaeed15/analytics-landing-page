'use client';
import React, { useRef } from 'react';
import MenuList from './MenuList';

const MenuMobile = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const toggleDialog = () => {
    if (!dialogRef.current) return;

    if (dialogRef.current.open) {
      dialogRef.current.close();
    } else {
      dialogRef.current.showModal();
    }
  };
  return (
    <div className="md:hidden">
      <div
        onClick={toggleDialog}
        className=" w-6 h-4 flex flex-col justify-between cursor-pointer"
      >
        <span className="block w-full h-[2px] bg-black rounded-full"></span>
        <span className="block w-full h-[2px] bg-black rounded-full"></span>
        <span className="block w-full h-[2px] bg-black rounded-full"></span>
      </div>
      {/* Menu content */}
      <dialog
        ref={dialogRef}
        onClick={toggleDialog}
        className="w-[90%] sm:w-[80%] h-[50vh]  bg-white p-0 mx-auto rounded-xl mt-[70px] overflow-hidden  "
      >
        <div className="flex flex-col justify-between items-center  mt-12">
          <MenuList />
          <button className="button-white rounded-xl text-lg w-[80%] mt-3">
            {' '}
            Request a quote
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default MenuMobile;
