import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';
import axios from 'axios';
import { useContext } from 'react';
import { store } from '../store';

function Product(props) {
  const { product } = props;
  const { state, dispatch: ctxDispatch } = useContext(store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/v1/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry the Product is Out Of Stock');
      return;
    }
    ctxDispatch({
      type: 'ADD_TO_CART',
      payload: { ...item, quantity },
    });
  };

  return (
    <Card className="product-card h-100 d-flex align-items-stretch">
      <Link to={`/product/${product.token}`}>
        <img
          className="card-img-top"
          src={product.image}
          alt={product.title}
        ></img>
      </Link>
      <Card.Body >
        <Link to={`/product/${product.token}`}>
          <Card.Title>{product.title}</Card.Title>
        </Link>
        <Rating
          rating={product.rating.rate}
          numReviews={product.rating.count}
        ></Rating>
        <Card.Text>{product.price} $</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="light" dissabled = {true}>
            Out Of Stock
          </Button>
        ) : (
          <Button
            onClick={() => {
              addToCartHandler(product);
            }}
          >
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default Product;
