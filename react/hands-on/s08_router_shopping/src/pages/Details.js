import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from "./Details.module.css"
import CheckoutBag from '../assets/CheckoutBag'
import BackArrow from '../assets/BackArrow'

const Details = () => {
    const params = useParams()
   const [product, setProduct] = useState({})
   const navigate = useNavigate();

useEffect(() => {
  fetch(`https://fakestoreapi.com/products/${params.productId}`)
  .then((res)=>res.json())
  .then((json)=> setProduct(json))
}, [])

const handleBack= ()=>{
  navigate(-1)
}
const handleCheckout= ()=>{
  navigate("/checkout")
}
// onClick={()=>navigate("/checkout")

  return (
    <div>
      <div className={styles.detailsNav}>
      <BackArrow onClick={handleBack}/>
       <h1>Details Page</h1>
       <CheckoutBag onClick={handleCheckout}/>
       </div>
       <div className={styles.detailsWrapper}>
        <p>{product?.id}</p>
        <p>{product?.title}</p>
        <p>{product?.description}</p>
        <p>{product?.category}</p>
        <p>{product?.price}</p>
        <p>{product?.rating?.rate}</p>
        <img src={product?.image} className={styles.detailsImage} alt="" />
        </div>
    </div>
  )
}

export default Details