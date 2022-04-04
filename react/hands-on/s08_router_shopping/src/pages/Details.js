import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const params = useParams()
    fetch("https://fakestoreapi.com/products/1")
    .then((res)=>res.json())
    .then((json)=> setProducts(json))
    console.log(params.id)
  return (
    <div>
        



    </div>
  )
}

export default Details