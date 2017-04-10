import React, {Component} from 'react';
import ProjectDescription from './ProjectDescription';

class ProjectItem extends Component {
  render() {
    const project = this.props.project;
    console.log(project);
    return (
      <li className="project-item">
        <h2 className="project-name">{project.name}</h2>
        <div className="project-link-container">
          <img src={require(project.img)} alt={project.name} />
          <div className="github-overlay"><a className="is-flex" href={project.url} target="_blank"><span>Git</span>Hub</a></div>
        </div>
        <div className="project-description-container">
          {project.description.map((blurb, index) => <ProjectDescription key={index} copy={blurb} />)}
        </div>
      </li>
    );
  }
}

export default ProjectItem;
