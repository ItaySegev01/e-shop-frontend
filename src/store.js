import { createContext, useReducer } from 'react';

export const store = createContext();

const initialState = {
  cart: {
    cartItems: [],
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newItem = action.payload;
      const existingItem = state.cart.cartItems.find(
        (item) => item.id === newItem.id
      );
      const cartItems = existingItem
       ? state.cart.cartItems.map((item) => 
        item._id = existingItem._id ? newItem : item
       )
       : [...state.cart.cartItems,newItem];
       //localStorage.setItem('cartItem', JSON.stringify(cartItem));
         return {...state, cart : {...state.cart, cartItems}}
       default:
        return state;
      };
};


export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <store.Provider value={value}>{props.children}</store.Provider>;
}
