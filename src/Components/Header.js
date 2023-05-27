import { LinkContainer,Container, Navbar,Badge,Nav, store,Link,useContext } from '../Imports';

function Header() {
  const { state } = useContext(store);
  const { cart } = state;

  return (
    <header className="header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>EShop</Navbar.Brand>
          </LinkContainer>
          <Nav className="ms-auto w-50 justify-content-end">
            <Link to="/cart" className="nav-link">
              <i className="fas fa-shopping-cart"></i>
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, b) => a + b.quantity, 0)}
                </Badge>
              )}
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
