import React from 'react';
import './App.css';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Shopping Cart</h1>
      </header>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
