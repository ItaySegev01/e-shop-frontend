import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function HomePage() {

 const [products,setProducts] = useState([]);
   
 useEffect( ()  => {

  const getProducts = async () => {
    const res = await axios.get("/api/v1/products");
    setProducts(res.data);
  };
  getProducts();
  } , [])

  return (
    <div className="App">
        <h1>Products :</h1>
      <div>
        {
          products.map((product) => 
          <div key={product.token} className='single-product'>
            <Link to={`/product/${product.token}`}>
              <img src={product.image} alt=""></img>
            </Link>
            <div className="product-desc">
              <Link to={`/product/${product.token}` }><p><strong>{product.name}</strong></p> </Link>
              <p>{product.price} $</p>
              <button>Add to cart</button>
            </div>
          </div>
          )
        }
        </div>
    </div>
  );
}

export default HomePage;