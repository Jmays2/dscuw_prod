import React, { Component } from 'react';
import Circles from '../Circles/Circles';
import WelcomeMessages from '../WelcomeMessages/WelcomeMessages';

class HomePage extends Component {
  render() {
    return (
      <div className="home-container">
        <Circles />
        <WelcomeMessages />
      </div>
    );
  }
}

export default HomePage;
