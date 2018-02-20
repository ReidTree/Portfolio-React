import React, { Component } from 'react';
import Route from './route';

class Demos extends Component {
  render() {
    return (
      <div className="demos-wrap">
        <Route.PageTitle title="DEMOS" />
        <Route.DemoPage />
      </div>
    );
    // <Route.Canvas />
  }
}

export default Demos;
