import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Route, Routes,HomePage,ProductPage,Container,CartPage,SignInPage,Footer,Header,ToastContainer,SignupPage,ShippingAddressPage,SubmitOrderPage,OrderPage,PaymentPage,SearchPage} from './Imports';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column side-allpage">
      <ToastContainer position="bottom-center" limit={1} />
        <Header/>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:token" element={<ProductPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/shipping" element={<ShippingAddressPage />} />
              <Route path="/placeorder" element={<SubmitOrderPage />} />
              <Route path="/order/:id" element={<OrderPage />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
