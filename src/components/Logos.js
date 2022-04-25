import React from "react";
import styles from "./Logos.module.scss";
import logo from "../images/student.png";

const Logos = () => {
  return (
    <div className={styles.container}>
      <h3>Our Customers</h3>
      <div>
        <img src={logo} alt="logo" />
        <img src={logo} alt="logo" />
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Logos;
