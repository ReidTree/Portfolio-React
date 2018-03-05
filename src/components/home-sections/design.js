import React, { Component } from 'react';
import Rt from '../route';


class HomeDesign extends Component {
  render() {
    const creativeDirect = {
      title: "creative",
      type: "moreDirect",
    };
    return (
      <Rt.HomeLayout >
        <img className="miCapLogo" src="../imgs/micapital-stack.png" />
        <p>MICAPITAL is a financial firm based in Michigan. Specializing in creating tactical investment portfolios for their clients. </p>
        <a target="_blank" href="https://micapitaladvisors.com/"> visit MI Capital </a>
        <Rt.Layout objPass={creativeDirect} />
      </Rt.HomeLayout >
    );
  }
}

export default HomeDesign;
