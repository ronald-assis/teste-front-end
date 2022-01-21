import React, { useState, useEffect } from 'react';
import data from '../../data';
import Modal from '../Modal';
import ProductsCard from '../ProdutsCard';
import './Products.scss';

const Products = () => {
  const [modal, setModal] = useState(false);
  const [item, setItem] = useState({});
  const [itens, setItens] = useState([]);
  const [seeMoreProduct, setSeeMoreProduct] = useState('VER MAIS');

  useEffect(() => {
    const { products } = data();
    products.splice(8, 4);
    setItens(products);
  }, []);

  const handleClick = (product) => {
    setModal(true);
    setItem(product);
  };

  const seeMore = () => {
    if (itens.length < 9) {
      const { products } = data();
      setItens(products);
      setSeeMoreProduct('VER MENOS');
    }
    if (itens.length > 8) {
      const { products } = data();
      products.splice(8, 4);
      setItens(products);
      setSeeMoreProduct('VER MAIS');
    }
  };
  return (
    <div className="products">
      {itens.map((product, i) => (
        <div key={i} className="featured-product">
          <ProductsCard product={product} handleClick={handleClick} />
        </div>
      ))}
      <button className="see-more-button" type="button" onClick={seeMore}>
        {seeMoreProduct}
      </button>
      {modal && <Modal item={item} setModal={setModal} />}
    </div>
  );
};

export default Products;
