import React, {Component} from 'react';
import Kaleidoscope from '../Kaleidoscope/Kaleidoscope';
import About from './About';
import RecentProjects from './RecentProjects';
import Contact from './Contact';
import NotFound from '../NotFound';

class MainContent extends Component {
  render() {
    let pathname = this.props.pathname;
    if (pathname === '/about') {
      return (
        <section className="main-content-wrapper">
          <Kaleidoscope />
          <div className="main-content-container">
            <h1 className="self-name is-centered"><a href="/">&lt; Nicholas Bryant /&gt;</a></h1>
            <About />
          </div>
        </section>
      );
    } else if (pathname === '/projects') {
      return (
        <section className="main-content-wrapper">
          <Kaleidoscope />
          <div className="main-content-container">
            <h1 className="self-name is-centered"><a href="/">&lt; Nicholas Bryant /&gt;</a></h1>
            <RecentProjects />
          </div>
        </section>
      );
    } else if (pathname === '/contact') {
      return (
        <section className="main-content-wrapper">
          <Kaleidoscope />
          <div className="main-content-container">
            <h1 className="self-name is-centered"><a href="/">&lt; Nicholas Bryant /&gt;</a></h1>
            <Contact />
          </div>
        </section>
      );
    } else {
      return (
        <NotFound />
      );
    }
  }
}

export default MainContent;
