import React, { Component } from 'react';
import '../design/Global.css'
import '../design/Contact.css'

class About extends Component {
  state = {

  }

  render() {
    return (
      <div className="contact-container container">
        <div className="contact-text">
            <p>I'd love to hear from you.</p>
            <p>You can reach me at:</p>
            <p>(512) 771-6422</p>
            <p>jay@jaywiles.com</p>
        </div>
      </div>
    )
  }
}

export default About;