import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Resume from "./components/resume";
import Journalism from "./components/journalism";
import Dev from "./components/dev";
import Header from "./components/header";
import Footer from "./components/footer";

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
        <Route path="/resume" component={Resume} />
        <Route path="/journalism" component={Journalism} />
        <Route path="/dev" component={Dev} />
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;
