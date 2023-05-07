import './App.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';


function App() {
  return (
  <BrowserRouter>
    <div className='App'>
      <header className='App-header-logo'>
        <Link to="/">EShop</Link>
      </header>
      <main>
        <Routes>
          <Route path='/product/:token' element={<ProductPage/>}/>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </main>
    </div>
  </BrowserRouter>
  );
}

export default App;
