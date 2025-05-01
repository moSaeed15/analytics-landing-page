import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="py-7 padding-x flex justify-between items-center">
      <Image src={'/icons/logo.svg'} alt="Logo" width={144} height={25} />
      <Image
        src={'/icons/menu-icon.svg'}
        alt="menu-icon"
        width={24}
        height={16}
      />
    </nav>
  );
};

export default Navbar;
