import { HiOutlineShoppingBag } from 'react-icons/hi';
import './ShoppingCart.scss';

const ShoppingCart = () => {
  return (
    <div className="shopping-cart">
      <HiOutlineShoppingBag />
      <span>SEU CARRINHO</span>
      <span>0 item (s)</span>
    </div>
  );
};

export default ShoppingCart;
