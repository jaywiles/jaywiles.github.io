import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Journalism from "./components/Journalism";
import Dev from "./components/Dev";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/journalism" component={Journalism} />
        <Route path="/dev" component={Dev} />
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;
