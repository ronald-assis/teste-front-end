import Benefits from '../Benefits';
import LogoAndUser from '../LogoAndUser';
import Navigation from '../Navigation';
import ShoppingCart from '../ShoppingCart';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <Benefits />
      <ShoppingCart />
      <LogoAndUser />
      <Navigation />
    </header>
  );
};

export default Header;
