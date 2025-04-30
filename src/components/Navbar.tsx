import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="flex">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={100}
        height={50}
        className="cursor-pointer"
      />
      <div className="">
        <span>Sign in</span>|
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={100}
          height={50}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
