import React, { Component } from 'react';
import './AboutPage.css';

class AboutPage extends Component {
  render() {
    return (
      <div className="blue-container">
        <div className="content">
          <h1 className="heading">About Us</h1>
          <p className="about">
            DSC serves as a bridge between technical theory and technical
            application. DSC will allow you to apply your course knowledge to
            tackle real-world problems in a community that is welcome for all
            levels of expertise. Immerse yourself in relevant modern-day tech
            today!
          </p>
          <a href="https://developers.google.com/community/dsc" target="_blank">
            <button className="learn-more" type="button">
              Learn More
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default AboutPage;
