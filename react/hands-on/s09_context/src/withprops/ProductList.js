import React from 'react'
import Product from './Product';

const ProductList = ({products, increasePrice, decreasePrice}) => {
    console.log(products);
  return (
    <div>ProductList
        {
          products.map(product =>(
            <Product key={product.id} product={product}
            increasePrice={increasePrice} decreasePrice={decreasePrice}/>
          ))  
        }
    
    
       
    </div>
  )
}

export default ProductList


// 