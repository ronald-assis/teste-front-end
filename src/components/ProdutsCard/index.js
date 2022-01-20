import './ProductsCard.scss';

const ProductsCard = ({ product }) => {
  return (
    <div
      className={`product ${product.productName
        .split(' ')
        .join('_')
        .toLocaleLowerCase()}`}
    >
      <img src={product.photo} alt={product.productName} />
      <h3>{product.productName}</h3>
      <p>{product.descriptionShort}</p>
      <h1>{`R$ ${product.price.toFixed(2)}`}</h1>
    </div>
  );
};

export default ProductsCard;
