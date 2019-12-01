import React, { Component } from 'react';
import '../design/Global.css'
import '../design/About.css'

class About extends Component {
  state = {

  }

  render() {
    return (
      <div className="about-container container">
        <div className="about-photo"></div>
        <div className="about-text">
          <p>Hi, I'm Jay. I'm a well-rounded full-stack web developer. My previous work experience includes broadcast journalism and government open records and public information.</p>
          <p>I am looking to switch careers to work as a web developer. Ideally, I would like to find a job that would benefit from my previous experience. I believe that my experiences could be very valuable to the right organization.</p>
          <p>In addition to my work experience, I have worked and volunteered doing audio/visual work. I am experienced in selecting and installing all audio/visual equipment a church or similar venue would need to broadcast its message.</p>
          <p></p>
        </div>
      </div>
    )
  }
}

export default About;

