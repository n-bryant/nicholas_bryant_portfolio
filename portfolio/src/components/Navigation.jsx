import React, {Component} from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav className="main-navigation">
        <ul className="nav-list is-flex">
          <li className="nav-item is-centered">About</li>
          <li className="nav-item is-centered">Recent Projects</li>
          <li className="nav-item is-centered">Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
