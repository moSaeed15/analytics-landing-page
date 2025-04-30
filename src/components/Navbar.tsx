import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="flex justify-between p-5  pr-8 items-center nav-shadow z-50 relative bg-dark-blue">
      <Image src="/logo.svg" alt="Logo" width={140} height={50} priority />
      <div className="flex gap-4 items-center">
        <span>Sign in</span>
        <Image
          priority
          src="/menu-icon.svg"
          alt="Logo"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
