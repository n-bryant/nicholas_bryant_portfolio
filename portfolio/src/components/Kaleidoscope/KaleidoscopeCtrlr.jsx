import React, {Component} from 'react';

class KaleidoscopeCtrlr extends Component {
  render() {
    return (
      <path className="kaleidoscope-ctrl" d={this.props.shape} onClick={this.props.updatePlayState} />
    );
  }
}

export default KaleidoscopeCtrlr;
// let flip = true;
// let pause = "M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28";
// let play = "M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26";
//    $animation = $('#animation');
//
// $(".ytp-play-button").on('click', function() {
//    flip = !flip;
//    $animation.attr({
//       "from": flip ? pause : play,
//       "to": flip ? play : pause
//    }).get(0).beginElement();
// });

// <button className="ytp-play-button ytp-button" aria-label="Pause">
//  <svg width="100%" height="100%" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg">
//     <defs>
//        <path>
//          <animate id="animation" begin="indefinite" attributeType="XML" attributeName="d" fill="freeze" from="M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26" to="M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28" dur="0.1s" keySplines=".4 0 1 1"
//          repeatCount="1"></animate>
//        </path>
//     </defs>
//  </svg>
// </button>
