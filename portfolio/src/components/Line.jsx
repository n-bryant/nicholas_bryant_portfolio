import React, {Component} from 'react';

class Line extends Component {
  render() {
    const {x1, x2, y1, y2, color} = this.props;
    return (
      <path d={`M${x1} ${y1} L${x2} ${y2}`} stroke={color} strokeWidth="1" />
    );
  }
}

export default Line;
