import React from 'react';
import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import styles from "./Products.module.css"


const Products = () => {
const [products, setProducts] = useState([])

useEffect(() => {
  fetch("https://fakestoreapi.com/products")
.then((res)=>res.json())
.then((json)=> setProducts(json))
}, []);

  return (
    <div>
      <h2>Products</h2>
  <div className={styles.products}>{
products.map(each=>(
<Link to={`details/${each.id}`} key={each.id} className={styles.product}>
  <h6>{each.category}</h6>
  <p>{each.title}</p>
  <img  className={styles.img} src={each.image} alt="" />
  </Link> 
))  
  }</div>
  </div>
  )
}

export default Products