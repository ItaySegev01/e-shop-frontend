import {
  LinkContainer,
  Container,
  Navbar,
  Badge,
  Nav,
  store,
  Link,
  useContext,
  axios,
  ADD_TO_CART,
  NavDropdown,
  USER_SIGNOUT,
  toast,
  SearchBox,
  useEffect,
  useNavigate,
  useState,
  useLocation,
} from '../Imports';


function Header() {
  const navigate = useNavigate();
  const [inHomePage, setInHome] = useState(false);
  const { state, dispatch: ctxDispatch } = useContext(store);
  const {
    cart: { cartItems },
    userInfo,
  } = state;
  const location = useLocation();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    const productId = event.dataTransfer.getData('text/plain');
    const { data } = await axios.get(`/api/v1/products/${productId}`);
    const existItem = cartItems.find((x) => x._id === data._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    if (data.countInStock < quantity) {
      toast.error('Sorry the Product is Out Of Stock');
      return;
    }
    ctxDispatch({
      type: ADD_TO_CART,
      payload: { ...data, quantity },
    });
  };

  const signoutHandler = () => {
    ctxDispatch({ type: USER_SIGNOUT });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  useEffect(() => {
    if (location.pathname !== '/') {
      setInHome(true);
    } else {
      setInHome(false);
    }
  }, [navigate]);

  return (
    <header className="header">
      <Navbar bg="dark" variant="dark" fixed="top" className="navbar-custom" >
        <Container>
          {inHomePage ? (
            <Nav className="md-5 nav-link" onClick={(e) => handleBackClick(e)}>
              <Nav.Item className='back-btn'>
                <i className='text-white align-arrow-right ms-5 back-btn'>Go Back</i>
                <i className="fa fa-arrow-left text-white align-arrow-right ms-4"></i>
              </Nav.Item>
            </Nav>
          ) : (
            <></>
          )}
          <LinkContainer to="/" className='d-grid gap-3'>
            <Navbar.Brand>EShop</Navbar.Brand>
          </LinkContainer>
          <Nav className="d-flex align-items-center w-50 ms-auto">
            <SearchBox />
          </Nav>
          <Nav className="ms-auto d-flex justify-content-end">
            <Link to="/cart" className="nav-link">
              <i
                className="fas fa-shopping-cart"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              ></i>
              {cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cartItems.reduce((a, b) => a + b.quantity, 0)}
                </Badge>
              )}
            </Link>
          </Nav>
          {userInfo ? (
            <NavDropdown
              className="text-white"
              title={userInfo.name}
              id="basic-nav-dropdown"
            >
              <Link
                onClick={signoutHandler}
                to="#signout"
                className="dropdown-item"
              >
                Sign Out
              </Link>
            </NavDropdown>
          ) : (
            <>
              <Link className="nav-link text-white" to="/signin">
                Sign In
              </Link>
            </>
          )}
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
