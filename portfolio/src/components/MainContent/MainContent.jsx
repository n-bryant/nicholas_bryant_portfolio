import React, {Component} from 'react';
import Kaleidoscope from '../Kaleidoscope/Kaleidoscope';
import About from './About';
import RecentProjects from './RecentProjects';
import Contact from './Contact';

class MainContent extends Component {
  render() {
    return (
      <section className="main-content-wrapper">
        <Kaleidoscope />
        <div className="main-content-container is-flex">
          <About />
          <RecentProjects />
          <Contact />
        </div>
      </section>
    );
  }
}

export default MainContent;
