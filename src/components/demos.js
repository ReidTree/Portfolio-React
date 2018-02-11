import React, { Component } from 'react';
import Route from './route';

class Demos extends Component {
  render() {
    return (
      <div className="demos-wrap">
        <Route.Canvas />
        <div className="pageTitleWrap">
          <h3 className="pageTitle"> DEMOS </h3>
        </div>
        <Route.DemoPage />
      </div>
    );
  }
}

export default Demos;
