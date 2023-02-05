import React from 'react'
import styles from "./ProductsScreen.module.css";
import ProductCard from '../../components/ProductCard/ProductCard';
function ProductsScreen({AddToCart,products}) {
  return (

    <div className={styles.products}>
{products.map((product)=>(
  <ProductCard key={product.id} product={product} 
  AddToCart={AddToCart}/>
))}
    </div>
  )
}

export default ProductsScreen