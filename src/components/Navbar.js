import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.scss";
import Login from "./Login";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li><Link to="/">Home page</Link></li>
          <li><Link to="products">Product</Link></li>
          <li><Link to="aboutus">About Us</Link></li>
          <li><Link to="contactus">Contact Us</Link></li>
        </ul>
        
        
      </div>
      <Login />
      
    </header>
  );
};

export default Navbar;
