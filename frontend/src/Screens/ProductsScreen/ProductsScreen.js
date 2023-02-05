import React from 'react'
import styles from "./ProductsScreen.module.css";
import ProductCard from '../../components/ProductCard/ProductCard';
function ProductsScreen() {
  return (

    <div className={styles.products}>
    <ProductCard/>

    </div>
  )
}

export default ProductsScreen