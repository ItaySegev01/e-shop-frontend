import './App.css';
import {BrowserRouter, Route, Routes,HomePage,ProductPage,Container,CartPage,SignInPage,Footer,Header } from './Imports';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column side-allpage">
        <Header/>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:token" element={<ProductPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/signin" element={<SignInPage />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
