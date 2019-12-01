import React, { Component } from 'react';
import '../design/Home.css'
import '../design/Global.css'

class Home extends Component {
  // state = {

  // }

  render() {
    return (
      <div className="home-container container">
        <div className="home-element home-journalism">
          <div className="home-element-text"><a href="./journalism">Journalism</a></div>
        </div>
        <div className="home-element home-development">
          <div className="home-element-text"><a href="./dev">Development</a></div>
        </div>
      </div>
    )
  }
}

export default Home;