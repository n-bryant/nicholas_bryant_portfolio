import React, {Component} from 'react';

class SelfInfo extends Component {
  render() {
    return (
      <div className="self-info-container is-flex">
        <h1 className="self-name">Nicholas Bryant</h1>
        <h2 className="self-title">&lt; Front-End Developer /&gt;</h2>
        <div className="self-portrait-container">
          <img className="self-portrait" src={require('../images/nb_self_portrait.jpg')} alt="Nicholas Bryant Portrait"/>
        </div>
      </div>
    );
  }
}

export default SelfInfo;
