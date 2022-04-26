import React from "react";
import styles from "./Navbar.module.scss";
import Login from "./Login";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li>Home page</li>
          <li>Product</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        
        
      </div>
      <Login />
      
    </header>
  );
};

export default Navbar;
