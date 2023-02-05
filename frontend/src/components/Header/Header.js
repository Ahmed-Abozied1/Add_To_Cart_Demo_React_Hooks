import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
function Header({cartItems}) {
  return (
    <header className={styles.header}>
      <div>
        <h1>
          <Link to="/" className={styles.logo}>
            Electroo{" "}
          </Link>
        </h1>
      </div>

      <div className={styles.links}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">
              <i className ="fa-solid fa-cart-shopping"></i>
              <span className={styles.badge} >     {cartItems.length}</span>
    
            </Link>
          </li>
        
         
        </ul>
      </div>
    </header>
  );
}

export default Header;
