import { createContext, useReducer, storeReducer } from './Imports';

export const store = createContext();

const initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
  userInfo: localStorage.clear('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
  shippingAddress: localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {
      fullName : '',
      adress : '',
      city : '',
      postalCode: '',
      country : '',
    },
  paymentMethod: localStorage.getItem('paymentMethod')
    ? localStorage.getItem('paymentMethod')
    : '',
};

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  const body = { state, dispatch };
  return <store.Provider value={body}>{props.children}</store.Provider>;
}
