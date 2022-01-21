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
    <section className="products">
      {products.map((product, i) => (
        <article className="featured-product">
          <ProductsCard key={i} product={product} handleClick={handleClick} />
        </article>
      ))}
      <button type="button">VER MAIS</button>
      {modal && <Modal item={item} setModal={setModal} />}
    </section>
  );
};

export default Products;
