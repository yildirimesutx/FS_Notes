import React from 'react'
import { ProductProvider } from './ProductContext'
import ProductList from './ProductList'

const WithContextApp = () => {
  return (
    <div>
        <ProductProvider>
           <ProductList/>
        </ProductProvider>
        
    </div>
  )
}

export default WithContextApp