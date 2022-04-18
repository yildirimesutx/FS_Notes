import React, { useContext } from 'react'
import Product from './Product'
import { ProductContext } from './ProductContext'

const ProductList = () => {

    const { products }  = useContext(ProductContext)

  return (
    <div>
     {products.map((product)=>(
        <Product 
        key={products.id}
        product={product}
        />
    ))}
    </div>
  )
}

export default ProductList