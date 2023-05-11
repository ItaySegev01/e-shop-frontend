import React from 'react'
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const params = useParams();
    const {token} = params;
    
  return (
    <div>
      <h1>{token}</h1>
    </div>
  )
}

export default ProductPage
