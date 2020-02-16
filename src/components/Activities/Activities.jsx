import React, { Component } from 'react';
import './Activities.css';
import hackathonLogo from '../../assets/hackathon.png';
import studyJamLogo from '../../assets/study_jams.jpg';
import techTalkLogo from '../../assets/tech_talks.png';

class Activities extends Component {
  render() {
    return (
      <div className="yellow-container">
        <div className="activities-content">
          <div className="line1"></div>
          <div className="line2"></div>
          <img className="hackathon-content" src={hackathonLogo} alt="Image" />
          <img className="tech_talk-content" src={techTalkLogo} alt="Image" />
          <img className="study_jam-content" src={studyJamLogo} alt="Image" />
          <h1 className="hackathon-txt">Hackathons</h1>
          <h1 className="tech_talk-txt">Tech&nbsp;Talks</h1>
          <h1 className="study_jam-txt">Study&nbsp;Jams</h1>
        </div>
      </div>
    );
  }
}

export default Activities;
