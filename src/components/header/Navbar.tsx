import Image from 'next/image';
import MenuMobile from './MenuMobile';
import MenuDesktop from './MenuDesktop';

const Navbar = () => {
  return (
    <nav className="  py-7 padding-x flex justify-between items-center">
      <Image
        src={'/icons/logo.svg'}
        alt="Logo"
        width={144}
        height={25}
        className="h-6 w-36 md:h-8 md:w-40 lg:w-48 xl:h-9 xl:w-56 "
        priority
      />

      {/* desktop menu */}
      <MenuDesktop />
      {/* mobile menu */}
      <MenuMobile />
    </nav>
  );
};

export default Navbar;
