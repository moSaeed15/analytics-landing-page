import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="py-7 padding-x flex justify-between items-center">
      <Image
        src={'/icons/logo.svg'}
        alt="Logo"
        width={144}
        height={25}
        priority
      />
      <div className=" w-6 h-4 flex flex-col justify-between cursor-pointer">
        <span className="block w-full h-[2px] bg-black rounded-full"></span>
        <span className="block w-full h-[2px] bg-black rounded-full"></span>
        <span className="block w-full h-[2px] bg-black rounded-full"></span>
      </div>
    </nav>
  );
};

export default Navbar;
