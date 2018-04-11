import React, { Component } from 'react';
import './home-layout.css';

class HomeLayout extends Component {
  render() {
    const ps = this.props;
    const custom = ps.custom || '';
    return (
      <div className={"contentContainer " + custom}>
        <div className="contentWrap">
          <h3 className="home-section-head sans w-800">{ps.title}</h3>
          {ps.children}
        </div>
      </div>
    );
  }
}


export default HomeLayout;
