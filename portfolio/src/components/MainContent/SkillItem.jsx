import React, {Component} from 'react';
import '../../images/javascript.png';

class SkillItem extends Component {
  render() {
    return (
      <li className="skill-item is-flex">
        <img src={require(this.props.source)} alt={this.props.name}/>
        <p className="is-centered">{this.props.name}</p>
      </li>
    );
  }
}

export default SkillItem;
