import React, { Component } from "react";
import styles from "./Cards.module.scss";
import Card from "./Card";
import item from "../images/tractor-slide-2.jpg";

class Cards extends Component {
  constructor(props){
    super(props);
    // this.state={
    //   items: props.items
    // }
    this.state={
      items: [{
        id: 1,
        name: "book",
        price: "500 $",
        image: item
      },{
        id: 2,
        name: "notebook",
        price: "400 $",
        image: item
      },{
        id: 3,
        name: "pencil",
        price: "200 $",
        image: item
      },{
        id: 4,
        name: "mobile",
        price: "900 $",
        image: item
      },{
        id: 5,
        name: "laptop",
        price: "1500 $",
        image: item
      }]
    }
  }

  render() {
    return (
      <div className={styles.container}>
        {this.state.items.map(item => <Card key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} /> )}
        {/* <Card name="book" price="500 $" image={item} />
        <Card name="book" price="600 $" image={item} />
        <Card name="book" price="400 $" image={item} />
        <Card name="book" price="700 $" image={item} /> */}
      </div>
    );
  }
}

export default Cards;
