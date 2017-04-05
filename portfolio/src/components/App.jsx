import React, {Component} from 'react';
import Landing from './Landing';
// import base from '../base';

class App extends Component {
  constructor() {
    super();

    this.state = {
      placeholder: 'test'
    };
  }

  render() {
    const childWithProp = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        placeholder: this.state.placeholder
      });
    });
    return (
      <div className="main-wrapper">
        {childWithProp}
      </div>
    );
  }
}

export default App;
