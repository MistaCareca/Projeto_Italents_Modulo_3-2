import React, { useState } from 'react';
import './App.css';
import Header from './Componentes/Header/Header';
import ProductForm from './Componentes/ProductForm/ProductForm';
import ProductList from './Componentes/ProductList/ProductList';

const App = () => {
  const [products,setProducts] = useState([]);
  
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (productToRemove) => {
    setProducts(products.filter((product)=> product !== productToRemove));
  }

  return (
    <>
      <div className="App">
        <Header>Catálogo de Produtos</Header>
        <div className='card'>
        <ProductForm addProduct={addProduct} />
        <ProductList products={products} removeProduct={removeProduct} />
        </div>
      </div>
    </>
  );
}

export default App;
