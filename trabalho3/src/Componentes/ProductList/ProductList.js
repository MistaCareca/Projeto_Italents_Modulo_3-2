import './ProductList.css';
import ProductItem from '../ProductItem/ProductItem';
import React from 'react';

const ProductList = ({ products, removeProduct }) => {
  return (
    <ul>
      {products.map((product, index) => (
        <ProductItem key={index} product={product} removeProduct={removeProduct} />
      ))}
    </ul>
  );
};

export default ProductList;

