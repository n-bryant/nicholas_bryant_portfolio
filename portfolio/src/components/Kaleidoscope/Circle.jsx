import React, {Component} from 'react';

class Circle extends Component {
  render() {
    const {data} = this.props;
    return (
      <circle ref={(pt) => this.point = pt} cx={data.x} cy={data.y} r={data.rad} fill={data.color} />
    );
  }
}

export default Circle;
