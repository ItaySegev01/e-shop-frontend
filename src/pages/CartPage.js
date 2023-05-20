import { useContext } from 'react';
import { store } from '../store';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageBox from '../Components/MessageBox';
import { Link,useNavigate  } from 'react-router-dom';
import  ListGroup  from 'react-bootstrap/ListGroup';
import  Card from 'react-bootstrap/Card';
import  Button from 'react-bootstrap/Button';
import axios from 'axios';


function CartPage() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item , quantity) => {
    const {data} = await axios.get(`/api/v1/products/${item._id}`);
    if (data.countInStock < quantity){
        window.alert('Sorry the Product is Out Of Stock');
        return;
    }
    ctxDispatch({
        type : 'ADD_TO_CART',
        payload: {...item, quantity},
    });
  }

  const removeItemHandler = async (item) => {
    ctxDispatch({
        type : 'REMOVE_FROM_CART',
        payload: item,
    });
  }

  const checkoutHandler = async () => {
    navigate('/signin?redirect=/shipping');
  }

  return (
    <div>
      <Helmet>
        <title>Shoping Cart</title>
      </Helmet>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Your Cart is Empty
              <div>
                <Link to="/"> Start Shoping</Link>
              </div>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item>
                  <Row className="align-items-center">
                    <Col md={4}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid rounded image-thumbnai"
                      ></img>
                      {/* ---- */}
                      <Link to={`/product/${item.token}`}>{item.title}</Link>
                    </Col>
                    <Col md={3}>
                      <Button 
                        variant="light" 
                        disabled={item.quantity === 1}
                        onClick={() => updateCartHandler(item, item.quantity - 1)}
                        >
                        <i className="fas fa-minus-circle"></i>
                      </Button>{' '}
                      <span>{item.quantity}</span>{' '}
                      <Button
                        variant="light"
                        disabled={item.quantity === item.rating.count}
                        onClick={() => updateCartHandler(item, item.quantity + 1)}
                      >
                        <i className="fas fa-plus-circle"></i>
                      </Button>
                    </Col>
                    <Col md={3}>${item.price}</Col>
                    <Col ms={2}>
                      <Button variant="light"
                        onClick={() => removeItemHandler(item)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>
                    Subtotal ({cartItems.reduce((a , b) => a + b.quantity , 0)}{' '}
                    items) : $ {cartItems.reduce((a,b) => a + b.price * b.quantity, 0)}
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className='d-grid'>
                        <Button 
                         type='button' 
                         variant='primary' 
                         disabled={cartItems.length === 0}
                         onClick= {() => checkoutHandler()}
                         >
                            Checkout
                        </Button>
                    </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}></Col>
      </Row>
    </div>
  );
}

export default CartPage;