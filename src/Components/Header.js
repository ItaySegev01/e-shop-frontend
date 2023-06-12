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
} from '../Imports';

function Header() {
  const { state, dispatch: ctxDispatch } = useContext(store);
  const {
    cart: { cartItems },
    userInfo,
  } = state;

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

  return (
    <header className="header">
      <Navbar bg="dark" variant="dark" fixed='top'>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>EShop</Navbar.Brand>
          </LinkContainer>
          <SearchBox/>
          <Nav className="ms-auto w-50 justify-content-end">
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
              <span className="nav-link text-white ms-1 me-1">or </span>
              <Link className="nav-link text-white" to="/signup">
                Sign Up
              </Link>
            </>
          )}
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
