import { ADD_TO_CART, REMOVE_FROM_CART, ADJUST_ITEM_QTY, CLEAR_CART } from './actionTypes';

const initialState = {
  cart: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      // Check if item is already in cart
      const existingItem = state.cart.find(item => item.id === newItem.id);

      if (existingItem) {
        // If item exists, adjust quantity
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === existingItem.id ? { ...item, qty: item.qty + 1 } : item
          )
        };
      } else {
        // If item does not exist, add to cart
        return {
          ...state,
          cart: [...state.cart, { ...newItem, qty: 1 }]
        };
      }

    case REMOVE_FROM_CART:
      const itemId = action.payload;
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== itemId)
      };

    case ADJUST_ITEM_QTY:
      const { id, qty } = action.payload;
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === id ? { ...item, qty: qty } : item
        )
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: []
      };

    default:
      return state;
  }
};

export default cartReducer;
