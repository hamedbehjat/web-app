import React from "react";
import styles from "./Slide.module.scss";
import slide1 from "../images/tractor-slide.jpg";

const Slide = () => {
  return (
    <div className={styles.sliderContainer}>
      <img src={slide1} alt="slide1"></img>
      {/* <img src={slide2} alt='slide1' ></img> */}
      <div className={styles.caption}>
        <h1>Web Project</h1>
        <p>
          We are learning <span>React</span>
        </p>
      </div>
    </div>
  );
};

export default Slide;
