import React, { Component } from "react";
import axios from "axios";
import styles from "./Products.module.scss";

import Card from "./Card";
class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      apiError: false,
    };
  }

  componentDidMount() {
    if (this.state.products.length === 0) {
      axios
        .get("http://fakestoreapi.com/products")
        .then((response) => this.setState({ products: response.data }))
        .catch((error) => {
          this.setState({ apiError: true });
        });
    }
  }

  componentDidUpdate() {
    console.log("product page", this.state.products);
  }

  render() {
    const { products } = this.state;
    return (
      <>
        <h2 className={styles.pageHeader}>products:</h2>
        <div className={styles.container}>
          {products.length ? (
            products.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                name={item.title}
                price={`${item.price} $`}
                image={item.image}
              />
            ))
          ) : (
            <p> Loading... </p>
          )}

          {/* {this.state.products.map((product)=> <p>{product.title}</p>)} */}
        </div>
      </>
    );
  }
}

export default Products;
