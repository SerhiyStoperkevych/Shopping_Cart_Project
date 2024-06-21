import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions';

const ProductList = ({ products, addToCart }) => (
  <div>
    <h2>Products</h2>
    {products.map(product => (
      <div key={product.id}>
        <p>{product.name} - ${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  products: state.products
});

const mapDispatchToProps = {
  addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
Create Cart Component:
Create src/Cart.js to display the items in the cart and manage quantities:

javascript
Копировать код
// src/Cart.js
import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, adjustItemQty, clearCart } from './actions';

const Cart = ({ cart, removeFromCart, adjustItemQty, clearCart }) => (
  <div>
    <h2>Shopping Cart</h2>
    {cart.length === 0 ? <p>Your cart is empty.</p> : (
      <div>
        {cart.map(item => (
          <div key={item.id}>
            <p>{item.name} - ${item.price} - Qty: {item.qty}</p>
            <button onClick={() => adjustItemQty(item.id, item.qty - 1)}>-</button>
            <button onClick={() => adjustItemQty(item.id, item.qty + 1)}>+</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
        <button onClick={() => clearCart()}>Clear Cart</button>
      </div>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  cart: state.cart.cart
});

const mapDispatchToProps = {
  removeFromCart,
  adjustItemQty,
  clearCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
