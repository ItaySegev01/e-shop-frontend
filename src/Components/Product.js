import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';

function Product(props) {
  const { product } = props;
  return (
    <Card className="product-card">
      <Link to={`/product/${product.token}`}>
        <img
          className="card-img-top"
          src={product.image}
          alt={product.title}
        ></img>
      </Link>
      <Card.Body>
        <Link to={`/product/${product.token}`}>
          <Card.Title>{product.title}</Card.Title>
        </Link>
        <Rating
          rating={product.rating.rate}
          numReviews={product.rating.count}
        ></Rating>
        <Card.Text>{product.price} $</Card.Text>
        <Button>Add to card</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
