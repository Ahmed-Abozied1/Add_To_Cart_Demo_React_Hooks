import React, { useContext } from 'react'
import styles from "./ProductsScreen.module.css";
import ProductCard from '../../components/ProductCard/ProductCard';
import { ShoppingContext } from '../../components/context/ShoppingContext';
function ProductsScreen() {
  const {products}=useContext(ShoppingContext);
  return (
 
    <div className={styles.products}>
{products.map((product)=>(
  <ProductCard key={product.id} products={products} product={product}/>
))}
    </div>
  )
}

export default ProductsScreen