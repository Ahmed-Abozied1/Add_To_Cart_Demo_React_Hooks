import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Header.module.css"
function Header() {
  return (
    <header className={styles.header}>
<div>
    <h1>
        <Link to="/" className={styles.logo}>Electroo </Link>
    </h1>
</div>


<div className={styles.links}>
<ul>
<li>
        <Link to="/">Home</Link>
    </li>
    <li>
        <Link to="/signin">SignUp</Link>
    </li>
    <li>
        <Link to="/cart">
        <i class="fa-solid fa-cart-shopping"></i> 
                       </Link>
    </li>
</ul>
</div>
    </header>
  )
}

export default Header