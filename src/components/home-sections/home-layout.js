import React, { Component } from 'react';
import Rt from '../route';
import './home-layout.css';

class HomeLayout extends Component {
  render() {
    const ps = this.props;
    return (
      <div className="contentContainer">
        <div className="contentWrap">
          <h3 className="home-section-head">{ps.title}</h3>
          {ps.children}
        </div>
      </div>
    );
  }
}


export default HomeLayout;
