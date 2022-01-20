import React from 'react';
import data from '../../data';
import ProductsCard from '../ProdutsCard';
import './Products.scss';

const Products = () => {
  const { products } = data;

  return (
    <div className="products">
      {products.map((product, i) => (
        <ProductsCard key={i} product={product} />
      ))}
      <button type="button">VER MAIS</button>
    </div>
  );
};

export default Products;
