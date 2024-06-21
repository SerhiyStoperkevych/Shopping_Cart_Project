import { ADD_TO_CART, REMOVE_FROM_CART, ADJUST_ITEM_QTY, CLEAR_CART } from './actionTypes';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item
});

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId
});

export const adjustItemQty = (itemId, qty) => ({
  type: ADJUST_ITEM_QTY,
  payload: {
    id: itemId,
    qty: qty
  }
});

export const clearCart = () => ({
  type: CLEAR_CART
});
