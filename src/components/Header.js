import React, { Component } from 'react';

class Header extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <div className="header-logo"></div>
        <h4><a href="./Home">HOME</a></h4>
        <h4><a href="./about">ABOUT</a></h4>
        <h4><a href="./contact">CONTACT</a></h4>
      </div>
    )
  }
}

export default Header;

