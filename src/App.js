import './App.css';
import data from './/data.js'

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <a href="/">Eshop</a>
      </header>
      <main>
        <h1>Products :</h1>
        {
          data.products.map((product) => (
            <div key={product.token} className='product'>
              <img alt={product.name} src={product.image}></img>
              <p>{product.name}</p>
              <p>{product.price} $</p>
              <p>{product.brand}</p>
            </div>
          ))
        }
      </main>
    </div>
  );
}

export default App;
