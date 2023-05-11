import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';

function Product(props) {
  const { product } = props;
  return (
    <Card className='product-card'>
      <Link to={`/product/${product.token}`}>
        <img
          className="card-img-top"
          src={product.image}
          alt={product.name}
        ></img>
      </Link>
      <Card.Body>
        <Link to={`/product/${product.token}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text>{product.price}$</Card.Text>
        <Button>Add to card</Button>
      </Card.Body>
      <Rating
        rating={product.rating}
        numReviews={product.numReviews}
      ></Rating>
    </Card>
  );
}

export default Product;