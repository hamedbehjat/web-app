import React, { Component } from "react";
import styles from "./Cards.module.scss";
import Card from "./Card";
import item from "../images/tractor-slide-2.jpg";

class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card name="book" price="500 $" image={item} />
        <Card name="book" price="600 $" image={item} />
        <Card name="book" price="400 $" image={item} />
        <Card name="book" price="700 $" image={item} />
      </div>
    );
  }
}

export default Cards;
