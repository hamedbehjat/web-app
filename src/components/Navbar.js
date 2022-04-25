import React from "react";
import styles from "./Navbar.module.scss";
import logo from "../images/student.png";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li>Home page</li>
          <li>Product</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Navbar;
