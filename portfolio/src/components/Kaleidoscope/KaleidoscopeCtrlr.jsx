import React, {Component} from 'react';

class KaleidoscopeCtrlr extends Component {
  render() {
    return (
      <path className="kaleidoscope-ctrl" d={this.props.shape} onClick={this.props.updatePlayState} />
    );
  }
}

export default KaleidoscopeCtrlr;
