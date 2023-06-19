import {Link, Card, Button, Rating, axios, useContext, store,ADD_TO_CART,toast} from '../Imports';

function Product(props) {
  const { product } = props;
  const { state, dispatch: ctxDispatch } = useContext(store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (product) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/v1/products/${product._id}`);
    if (data.countInStock < quantity) {
      toast.error('Sorry the Product is Out Of Stock');
      return;
    }
    ctxDispatch({
      type: ADD_TO_CART,
      payload: { ...product, quantity },
    });
  };

  const handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', product._id);
  };


  return (
    <Card className="product-card" draggable='true' onDragStart={handleDragStart}>
      <Link to={`/product/${product.token}`}>
        <Card.Img
          className="card-image-page"
          src={product.image}
          alt={product.title}
        ></Card.Img>
      </Link>
      <Card.Body className="card-body d-flex flex-column  justify-content-end">
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
            Out of Stock
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
