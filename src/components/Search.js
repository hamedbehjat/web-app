import React, { Component } from "react";
import styles from "./Search.module.scss";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  searchHandler = event => {
      this.setState({
          input: event.target.value
      })
  }

  render() {
    return (
      <div className={styles.container}>
        <p>Type what you want</p>
        <div>
          <input
            value={this.state.input}
            onChange={this.searchHandler}
            placeholder="search here"
          />
          <span>{this.state.input}</span>
        </div>
      </div>
    );
  }
}

export default Search;
