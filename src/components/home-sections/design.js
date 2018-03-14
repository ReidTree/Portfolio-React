import React, { Component } from 'react';
import Rt from '../route';
import './design.css';

class HomeDesign extends Component {
  render() {
    return (
      <Rt.HomeLayout title="Graphic Design" >
        <div className="about-summary" >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <img className="miCapLogo" src="../imgs/micapital-stack.png" />
        <p>MICAPITAL is a financial firm based in Michigan. Specializing in creating tactical investment portfolios for their clients. </p>
        <a target="_blank" href="https://micapitaladvisors.com/"> visit MI Capital </a>
        <Rt.MoreButton title="design" />
      </Rt.HomeLayout >
    );
  }
}

export default HomeDesign;
