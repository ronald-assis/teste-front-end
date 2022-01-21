import React, { useState } from 'react';
import data from '../../data';
import Modal from '../Modal';
import ProductsCard from '../ProdutsCard';
import './Products.scss';

const Products = () => {
  const [modal, setModal] = useState(false);
  const [item, setItem] = useState({});
  const { products } = data;

  const handleClick = (product) => {
    setModal(true);
    setItem(product);
  };

  return (
    <div className="products">
      {products.map((product, i) => (
        <div className="featured-product">
          <ProductsCard key={i} product={product} handleClick={handleClick} />
        </div>
      ))}
      <button type="button">VER MAIS</button>
      {modal && <Modal item={item} setModal={setModal} />}
    </div>
  );
};

export default Products;
