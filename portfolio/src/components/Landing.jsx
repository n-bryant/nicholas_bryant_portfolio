import React, {Component} from 'react';
import InteractiveWeb from './InteractiveWeb';
// import base from '../base';

class Landing extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="landing-wrapper">
        <InteractiveWeb />
      </div>
    );
  }
}

export default Landing;
