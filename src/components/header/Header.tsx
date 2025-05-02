import HeaderContent from './HeaderContent';
import Navbar from './Navbar';
import Timeline from './Timeline';

const Header = () => {
  return (
    <header>
      <Navbar />
      <HeaderContent />
      <Timeline />
    </header>
  );
};

export default Header;
