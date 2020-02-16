import React, { Component } from 'react';
import './QuestionsPage.css';

class QuestionsPage extends Component {
  render() {
    return (
      <div className="green-container">
        <div className="questions-content">
          <div className="question-text">
            <h1>Questions?</h1>
            <h2>Send us an email!</h2>
          </div>
          <div className="form">
            <textarea
              className="form-input"
              type="text"
              placeholder="Name"
            ></textarea>
            <textarea
              className="form-input"
              type="text"
              placeholder="Email Address"
            ></textarea>
            <textarea
              className="form-input-message"
              type="text"
              placeholder="Message"
            ></textarea>
            <button className="form-btn">Send</button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionsPage;
