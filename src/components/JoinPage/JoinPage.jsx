import React, { Component } from 'react';
import './JoinPage.css';

class JoinPage extends Component {
  render() {
    return (
      <div className="red-container">
        <div className="join-content">
          <h1 className="header">How do I join?</h1>
          <p className="join-about">
            Click the Join Now link to sign up for this community and the events{' '}
            <br></br>that we will be hosting throughout the semester!
          </p>
          <button className="join-now" type="button">
            Join Now
          </button>
        </div>
      </div>
    );
  }
}

export default JoinPage;
