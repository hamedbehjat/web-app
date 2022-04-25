import React from "react";
import Navbar from "./components/Navbar";
import Slide from "./components/Slide";
import Cards from "./components/Cards";
import Search from "./components/Search";
import Logos from "./components/Logos";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Slide />
      <Cards />
      <Search />
      <Logos />
      <Footer />
    </div>
  );
}

export default App;
