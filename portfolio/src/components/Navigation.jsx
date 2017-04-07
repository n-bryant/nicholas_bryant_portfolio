import React, {Component} from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav className="main-navigation">
        <ul className="nav-list is-flex">
          <li className="nav-item is-centered"><a href="/about">About</a></li>
          <li className="nav-item is-centered"><a href="/projects">Recent Projects</a></li>
          <li className="nav-item is-centered"><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
