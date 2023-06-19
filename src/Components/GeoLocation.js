import {useContext, store } from '../Imports'

const GeoLocation = () => {
  const { state } = useContext(store);
  const { cart: {shippingAddress} } = state;

  return (
    <div className="text-white">
      <p>{shippingAddress.city} {shippingAddress.address}</p>
    </div>
  );
};

export default GeoLocation;