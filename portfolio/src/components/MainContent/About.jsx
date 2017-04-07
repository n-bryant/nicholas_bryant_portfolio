import React, {Component} from 'react';
import SelfInfo from '../SelfInfo';
import Navigation from '../Navigation';
import SkillList from './SkillList';

class About extends Component {
  render() {
    return (
      <div className="about-wrapper">
        <div className="about-content-container">
          <header>
            <Navigation />
          </header>
          <SelfInfo />
          <div className="about-copy-container">
            <p className="about-copy-1">I first became interested in web development while I was working for a software company in a support capacity in Charleston, SC.  I was working heavily with a relational database using SQL, but the position also required me to dig deep into the organization’s codebase in order to provide root cause analysis and resolution of bugs.  Some of the technologies I was able to learn about in that role were front-end technologies such as JavaScript, HTML, and CSS.</p>
            <p className="about-copy-2">These technologies were especially interesting to me because at heart, I am a lover of stories.  As an avid reader and binger of Netflix, I found the prospect of building interactive ways for people to present their stories to the world to be very fulfilling.  With that in mind, I made the decision to take the Front-End Engineering course at The Iron Yard in order to solidify the skills I had been learning in my previous work experience and through independent study.  The program was an immersive 12 week course focusing on building functional, interactive web apps from scratch using HTML, CSS, CSS preprocessors, JavaScript, external libraries, and MVC frameworks.</p>
            <p className="about-copy-3">The course culminated in a final capstone project.  As my final project, I helped to build OpenScores, a web collaboration tool for composers built in ReactJS allowing multiple users to simultaneously draft music notation in real time.  I am excited to see where this strong foundation of skills in interactive web development will take me.  Feel free to contact me and take a look at some of my recent projects listed on this website.</p>
            <p className="about-copy-4">When I am not coding, I enjoy rock climbing, playing guitar, home brewing, and designing board games with my brother <a href="https://patrickbryantauthor.com/" target="_blank">@Patrick Bryant</a>.</p>
          </div>
        </div>
        <SkillList />
      </div>
    );
  }
}

export default About;
