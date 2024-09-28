import './ProductItem.css';
import React from 'react';

const ProductItem = ({ product, removeProduct }) => {
  return (
    <li>
      {product.name} - R$ {product.price}
      <button onClick={() => removeProduct(product)}>Remover</button>
    </li>
  );
};

export default ProductItem;
