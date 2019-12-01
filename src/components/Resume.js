import React, { Component } from 'react';
import '../design/Global.css'
import '../design/Resume.css'

class Resume extends Component {
  state = {

  }

  render() {
    return (
      <div className="resume-container container">
        <div className="resume-name-head">Jay Wiles</div>
        <div className="resume-columns">
          <div className="left-column column">
            <div className="column-header">Work Experience</div>
              <ul>
                <li>
                  <div className="job-title">Travis County Sheriff's Office</div>
                  <div className="job-title">Multimedia Information Specialist | July 2018 - Present</div>
                  <ul className="job-description">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
                <li>
                  <div className="job-title">KXAN-TV (Austin NBC)</div>
                  <div className="job-title">News Producer | May 2013 - July 2018</div>
                  <ul className="job-description">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <div className="job-title">Assignment Editor | June 2012 - August 2012, Freelance after</div>
                  <ul className="job-description">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
              </ul>
          </div>
          <div className="middle-column column">
            <div className="column-header">Work Experience (continued)</div>

            <div className="column-header">Certifications</div>

          </div>
          <div className="right-column column">
            <div className="column-header">Skills</div>

            <div className="column-header">Volunteering</div>

          </div>
        </div>
      </div>
    )
  }
}

export default Resume;

