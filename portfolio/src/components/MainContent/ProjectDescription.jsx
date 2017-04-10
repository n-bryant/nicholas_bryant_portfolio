import React, {Component} from 'react';

class ProjectDescription extends Component {
  render() {
    return (
      <p className="project-description">{this.props.copy}</p>
    );
  }
}

export default ProjectDescription;
