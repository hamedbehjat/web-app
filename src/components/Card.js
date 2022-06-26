import React, { Component } from "react";
import styles from "./Card.module.scss";
import down from "../images/down.svg";
import up from "../images/up.svg";
import {Link} from 'react-router-dom';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  downHandler = () => {
    if (this.state.counter >= 1) {
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }));
    }
  };

  upHandler = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    const { name, price, image, id } = this.props;
    const { counter } = this.state;

    return (
      <div className={styles.container}>
        <img src={image} alt={name} />
        
        <div className={styles.cardInfo}>
        <Link to={`/products/${id}`}><h3>{name}</h3></Link>
        
          <p>
            {price}
            {counter ? `* ${counter} = ${counter * price.split(" ")[0]} $` : ""}
            {/* {counter ? `* ${counter} = ${counter * price} $` : ""} */}
          </p>

          <div className={styles.counter}>
            <img
              className={this.state.counter ? "" : styles.diactive}
              src={down}
              alt="down"
              onClick={this.downHandler}
            />
            {/* <img
            className={!this.state.counter && styles.diactive}
            src={down}
            alt="down"
            onClick={this.downHandler}
          /> */}
            <span>{counter}</span>
            <img src={up} alt="up" onClick={this.upHandler} />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
