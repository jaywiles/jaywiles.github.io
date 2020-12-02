import React, { Component } from 'react';
import '../design/header.css'

class Header extends Component {
  state = {

  }

  render() {
    return (
      <div className="header-container">
        <div className="header-photo"></div>
        <h4 className="header-element"><a href="./">HOME</a></h4>
        <h4 className="header-element"><a href="./about">ABOUT</a></h4>
        <h4 className="header-element"><a href="./contact">CONTACT</a></h4>
        <h4 className="header-element"><a href="./resume">RESUME</a></h4>
      </div>
    )
  }
}

export default Header;

