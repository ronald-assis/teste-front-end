import PropTypes from 'prop-types';
import './ProductsCard.scss';

const ProductsCard = ({ product, handleClick }) => {
  return (
    <button
      className={`product ${product.productName
        .split(' ')
        .join('_')
        .toLocaleLowerCase()}`}
      onClick={() => handleClick(product)}
    >
      <img src={product.photo} alt={product.productName} />
      <h3 className="product-name">{product.productName}</h3>
      <p className="product-description">{product.descriptionShort}</p>
      <h1 className="product-price">{`R$ ${product.price.toFixed(2)}`}</h1>
    </button>
  );
};

ProductsCard.propTypes = {
  photo: PropTypes.string,
  productName: PropTypes.string,
  price: PropTypes.number,
  descriptionShort: PropTypes.string,
}.isRequired;

export default ProductsCard;
