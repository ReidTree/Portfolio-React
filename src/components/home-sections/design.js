import React, { Component } from 'react';
import Rt from '../route';
import './design.css';

class HomeDesign extends Component {
  render() {
    return (
      <Rt.HomeLayout title="See More of Trierweiler Creates Work" >
        <div className="about-summary" >
          <p className="serif w-300">With nearly ten years of design work, and a year of Web Development, I have put together a thorough portfolio of my work.</p>
        </div>
        <Rt.MoreButton title="demos" />
      </Rt.HomeLayout >
    );
  }
}

export default HomeDesign;
