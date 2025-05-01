import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <Image src={'/icons/logo.svg'} alt="Logo" width={100} height={50} />
    </nav>
  );
};

export default Navbar;
