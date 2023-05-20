import './App.css';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import {store} from './store'
import CartPage from './pages/CartPage';

function App() {
  const {state} = useContext(store);
  const {cart} = state;
  return (
    <BrowserRouter>
      <div className="d-flex flex-column side-allpage">
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>EShop</Navbar.Brand>
            </LinkContainer>
            <Nav className='ms-auto w-50 justify-content-end'>
              <Link to="/cart" className="nav-link">
                <i className='fas fa-shopping-cart'></i>
                {cart.cartItems.length > 0 && (
                  <Badge pill bg='danger'>
                    {cart.cartItems.reduce((a,b) => a + b.quantity, 0)}
                  </Badge>
                )}
              </Link>
            </Nav>
          </Container>
        </Navbar>
        <main>
          <Container className='mt-3'>
            <Routes>
              <Route path="/product/:token" element={<ProductPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All right's reserved @2023</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
