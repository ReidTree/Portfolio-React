import React, { Component } from 'react';
import Rt from '../route';

class HomeLayout extends Component {
  render() {
    return (
      <div className="contentContainer">
        <div className="contentWrap">
          {this.props.children}
        </div>
      </div>
    );
  }
}


export default HomeLayout;
