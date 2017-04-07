import React, {Component} from 'react';
import Kaleidoscope from './Kaleidoscope/Kaleidoscope';
import SelfInfo from './SelfInfo';
import Navigation from './Navigation';
// import base from '../base';

class Landing extends Component {
  render() {
    return (
      <div className="landing-wrapper">
        <Kaleidoscope />
        <div className="landing-content-container">
          <SelfInfo className="landing" />
          <Navigation />
        </div>
      </div>
    );
  }
}

export default Landing;
