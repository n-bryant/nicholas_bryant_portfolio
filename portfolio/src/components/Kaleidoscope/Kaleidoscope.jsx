import React, {Component} from 'react';
import Circle from './Circle';
import Line from './Line';
import KaleidoscopeCtrlr from './KaleidoscopeCtrlr';

class InteractiveWeb extends Component {
  constructor() {
    super();

    this.animatePoints = this.animatePoints.bind(this);
    this.checkOutOfBounds = this.checkOutOfBounds.bind(this);
    this.createPoints = this.createPoints.bind(this);
    this.updatePlayState = this.updatePlayState.bind(this);
    this.updateSelectedPoint = this.updateSelectedPoint.bind(this);
    this.state = {
      width: window.innerWidth - 50,
      height: window.innerHeight - 50,
      ctrlBtnShape: 'M 11 10 L 17 10 L 17 26 L 11 26 M 20 10 L 26 10 L 26 26 L 20 26',
      isPlaying: true,
      lineFill: 'rgba(252, 252, 253, .5)',
      maxPointCount: 100,
      minRad: 4,
      maxRad: 8,
      minVel: 1,
      maxVel: 25,
      points: {},
      ptAnimateInterval: setInterval(this.animatePoints, 5000),
      selectedPoint: null,
      sidePadding: 25
    };
  }

  componentDidMount() {
    this.createPoints();
  }

  animatePoints() {
    let bounds = this.canvas.getBoundingClientRect();
    if (window.innerWidth - 50 !== bounds.width || window.innerHeight - 50 !== bounds.height) {
      let width = this.state.width;
      width = window.innerWidth - 50;
      this.setState({width});

      let height = this.state.height;
      height = window.innerHeight - 50;
      this.setState({height});

      this.createPoints();
    } else {
      let points = {...this.state.points};
      let minVel = this.state.minVel;
      let maxVel = this.state.maxVel;

      for (let i = 0; i < Object.keys(points).length; i++) {
        let currKey = Object.keys(points)[i];
        // store values for point movement
        points[currKey].vel = Math.random() * (maxVel - minVel) + minVel;
        points[currKey].angle = Math.random() * 360;
        let move = this.getPointMovement(points[currKey].vel, points[currKey].angle);

        // move the point
        points[currKey].x += move.x;
        points[currKey].y -= move.y;

        // account for points going out of bounds
        points[currKey] = this.checkOutOfBounds(points[currKey], bounds);
      }
      const randomSelection = `pt-${Math.floor(Math.random() * this.state.maxPointCount) + 1}`;
      this.updateSelectedPoint(randomSelection);

      // reset closest points and state
      this.getClosest(points);
      this.setState({points});
    }
  }

  createPoints() {
    const minRad = this.state.minRad;
    const maxRad = this.state.maxRad;
    const minVel = this.state.minVel;
    const maxVel = this.state.maxVel;
    const height = this.state.height;
    const width = this.state.width;
    const sidePadding = this.state.sidePadding;
    let points = {...this.state.points};

    // create maxPointCount points at random distances from each other
    for (let i = 0; i < this.state.maxPointCount; i++) {
      let angle = Math.random() * Math.PI * 2;
      let radius = Math.floor(Math.random() * (maxRad - minRad) + minRad);
      let x, y;

      if (i === 0) {
        x = width/2;
        y = height/2;
      } else {
        x = Math.random() * ((width - radius) - (sidePadding + radius)) + (sidePadding + radius);
        y = Math.random() * ((height - radius) - (sidePadding + radius)) + (sidePadding + radius);
      }

      let pt = {
        rad: radius,
        angle: angle,
        vel: Math.random() * (maxVel - minVel) + minVel,
        x: x,
        originX: x,
        y: y,
        originY: y,
        selected: false,
        color: 'rgb(252, 252, 253)'
      }
      pt.selectedRad = pt.rad * 2;
      points[`pt-${i}`] = pt;
    }

    this.getClosest(points);
    this.setState({points});
  }

  // check if point is outside the bounds of the canvas
  checkOutOfBounds(pt, bounds) {
    if (pt.x < bounds.left || pt.x > bounds.right) {
      pt.x = pt.originX;
    } else if (pt.y < bounds.top || pt.y > bounds.bottom) {
      pt.y = pt.originY;
    } return pt;
  }

  // find the closest points to each point
  getClosest(points) {
    let closestPtCount = 3;
    let ptsLength = Object.keys(points).length;
    for (let i = 0; i < ptsLength; i++) {
      let closest = [];
      let pt1 = points[`pt-${i}`];
      for (let j = 0; j < ptsLength; j++) {
        let pt2 = points[`pt-${j}`]
        if (!(pt1 === pt2)) {
          let placed = false;
          for (let k = 0; k < closestPtCount; k++) {
            if (!placed) {
              if (closest[k] === undefined) {
                closest[k] = pt2;
                placed = true;
              }
            }
          }

          for (let k = 0; k < closestPtCount; k++) {
            if (!placed) {
              if (this.getDistance(pt1, pt2) < this.getDistance(pt1, closest[k])) {
                closest[k] = pt2;
                placed = true;
              }
            }
          }
        }
      }
      pt1.closest = closest;
    }
    return points;
  }

  getDistance(pt1, pt2) {
    return Math.pow(pt1.x - pt2.x, 2) + Math.pow(pt1.y - pt2.y, 2);
  }

  getPointMovement(velocity, angle) {
    return {
      x: (velocity * Math.sin(angle * Math.PI / 180)),
      y: (velocity * Math.cos(angle * Math.PI / 180))
    };
  }

  updatePlayState() {
    let ctrlBtnShape = this.state.ctrlBtnShape;
    let isPlaying = this.state.isPlaying;
    let ptAnimateInterval = this.state.ptAnimateInterval;
    const paths = document.querySelectorAll('.paths-group path');

    if (ctrlBtnShape === 'M 11 10 L 17 10 L 17 26 L 11 26 M 20 10 L 26 10 L 26 26 L 20 26') {
      ctrlBtnShape = 'M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28';
    } else {
      ctrlBtnShape = 'M 11 10 L 17 10 L 17 26 L 11 26 M 20 10 L 26 10 L 26 26 L 20 26';
    }

    if (isPlaying) {
      clearInterval(this.state.ptAnimateInterval);
      isPlaying = false;
      paths.forEach((path) => {
        path.classList.remove('animating');
      });
    } else {
      isPlaying = true;
      ptAnimateInterval = setInterval(this.animatePoints, 5000);
      paths.forEach((path) => {
        path.classList.add('animating');
      });
    }

    this.setState({ctrlBtnShape});
    this.setState({isPlaying});
    this.setState({ptAnimateInterval});
  }

  updateSelectedPoint(key) {
    let points = {...this.state.points};
    for (let i = 0; i < Object.keys(points).length; i++) {
      let currKey = Object.keys(points)[i];
      if (currKey === key) {
        points[key].selected = true;
        points[key].color = 'rgb(153, 205, 63)';
        points[key].rad = points[key].selectedRad;
      } else {
        if (points[currKey].selected) {
          points[currKey].selected = false;
          points[currKey].color = 'rgb(252, 252, 253)';
          points[currKey].rad /= 2;
        }
      }
    }
    this.setState({points});
  }

  render() {
    return (
      <svg ref={(canvas) => this.canvas = canvas} className="web-container" height={this.state.height} width={this.state.width}>
        {Object.keys(this.state.points).map(point => <Circle key={point} index={point} data={this.state.points[point]} />)}
        <g className="paths-group">
          {Object.keys(this.state.points).map(point =>
            this.state.points[point].closest.map((closePt, index) => {
              let pt = this.state.points[point];
              return <Line key={`${point}-${index}`} index={`${point}-${index}`} x1={pt.x} x2={closePt.x} y1={pt.y} y2={closePt.y} color={this.state.lineFill} />
            })
          )}
        </g>
        <KaleidoscopeCtrlr shape={this.state.ctrlBtnShape} updatePlayState={this.updatePlayState} />
      </svg>
    );
  }
}

export default InteractiveWeb;
