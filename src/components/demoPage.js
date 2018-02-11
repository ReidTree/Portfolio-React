import React, { Component } from 'react';

class DemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: null,
    };
  }

  render() {
    return (
      <div id="demo-page" className={this.state.style}>
      </div>
    );
  }
}

export default DemoPage;
