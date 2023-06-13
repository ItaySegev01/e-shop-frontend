import { useParams,ListGroup,useEffect,useReducer,axios,Row,Col,Loading,MessageBox,getError,store,useContext,useNavigate,GET_REQUEST,GET_FAIL,GET_SUCCESS,productPageReducer,Title,Badge,Button,Rating,Card } from '../Imports';

function ProductPage() {
  const navigate = useNavigate();
  const params = useParams();
  const { token } = params;
  const [{ loading, error, product }, dispatch] = useReducer(productPageReducer, {
    loading: true,
    error: '',
    product: [],
  });

  useEffect(() => {
    const getProduct = async () => {
      dispatch({ type: GET_REQUEST });
      try {
        const res = await axios.get(`/api/v1/products/token/${token}`);
        dispatch({ type: GET_SUCCESS, payload: res.data });
      } catch (err) {
        dispatch({ type: GET_FAIL, payload: getError(err) });
      }
    };

    getProduct();
  }, [token]);

  const {state, dispatch : ctxDispatch} = useContext(store);
  const {cart} = state;

  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const {data} = await axios.get(`/api/v1/products/${product._id}`);
    if (data.countInStock < quantity){
      window.alert('Sorry. this product is out of stock');
      return;
    }
    ctxDispatch({ type : 'ADD_TO_CART' ,payload: {...product, quantity}});
    navigate('/cart');
  }

  return (
    <div className='productPage'>
      {loading ? (
        <Loading/>
      ) : error ? (
        <MessageBox variant='danger'>{error}</MessageBox>
      ) : (
        <Row>
          <Col md={6}>
            <img src={product.image} alt={product.title}  className="card-img-top card-image" />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
              <Title title={product.title} />
                <h1>{product.title}</h1>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  rating={product.rating.rate}
                  numReviews={product.rating.count}
                ></Rating>
              </ListGroup.Item>
              <ListGroup.Item>Pirce : ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description:
                <p>{product.description}</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>${product.price}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? (
                          <Badge bg="success">In Stock</Badge>
                        ) : (
                          <Badge bg="danger">Unavailable</Badge>
                        )}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <div className="d-grid">
                        <Button
                          onClick={() => addToCartHandler()}
                          variant="primary">
                          Add to Cart
                        </Button>
                      </div>
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default ProductPage;