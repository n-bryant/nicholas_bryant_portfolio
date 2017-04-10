import React, {Component} from 'react';
import SkillItem from './SkillItem';

class SkillList extends Component {
  constructor() {
    super();

    this.toggleSkills = this.toggleSkills.bind(this);
    this.state = {
      displaySkills: false,
      skills: {
        javascript: './skill_logos/javascript.png',
        css3: './skill_logos/css3.png',
        html5: './skill_logos/html5.png',
        sass: './skill_logos/sass.png',
        mysql: './skill_logos/sql.png',
        jquery: './skill_logos/jquery.gif',
        git: './skill_logos/git.png',
        gulp: './skill_logos/gulp.svg',
        angular: './skill_logos/angular.svg',
        react: './skill_logos/react.svg',
        handlebars: './skill_logos/handlebars.png',
        npm: './skill_logos/npm.svg'
      }
    };
  }

  toggleSkills() {
    let displaySkills = this.state.displaySkills;
    displaySkills = !displaySkills;
    this.setState({displaySkills});
  }

  render() {
    if (this.state.displaySkills) {
      return (
        <div className="about-skills-container skills-shown">
          <div className="collapse-skills-btn is-centered" onClick={this.toggleSkills}>
            <div className="arrow-container">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000">
                <path d="M500,353L500,353l424.7,424.6l65.3-65.3L532.7,255L500,222.4L467.3,255L10,712.3l65.3,65.3L500,353z"></path>
              </svg>
            </div>
          </div>
          <h2 className="skills-title is-centered">Skills</h2>
          <ul className="skill-list is-flex">
            {Object.keys(this.state.skills)
              .map((skill) => <SkillItem key={skill} name={skill} source={this.state.skills[skill]}/>)}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="about-skills-container skills-hidden">
          <h2 className="skills-btn is-centered" onClick={this.toggleSkills}>Skills</h2>
        </div>
      );
    }
  }
}

export default SkillList;
