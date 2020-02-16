import React, { Component } from 'react';
import './Circles.css';
import { colors } from './Colors';

class Circles extends Component {
  render() {
    return (
      <div className='circles'>
        <div
          className='circle1'
          style={{ backgroundColor: colors.google_green }}
        ></div>
        <div
          className='circle2'
          style={{ backgroundColor: colors.google_green }}
        ></div>
        <div
          className='circle3'
          style={{ backgroundColor: colors.google_yellow }}
        ></div>
        <div
          className='circle4'
          style={{ backgroundColor: colors.google_yellow }}
        ></div>
        <div
          className='circle5'
          style={{ backgroundColor: colors.google_blue }}
        ></div>
        <div
          className='circle6'
          style={{ backgroundColor: colors.google_blue }}
        ></div>
        <div
          className='circle7'
          style={{ backgroundColor: colors.google_red }}
        ></div>
        <div
          className='circle8'
          style={{ backgroundColor: colors.google_red }}
        ></div>
      </div>
    );
  }
}

export default Circles;
