import React, { Component } from "react";
import Slide from "./Slide";
import Cards from "./Cards";
import Search from "./Search";
import Logos from "./Logos";

class Landing extends Component {
  render() {
    return (
      <div>
        <Slide />
        <Cards />
        <Search />
        <Logos />
      </div>
    );
  }
}

export default Landing;
