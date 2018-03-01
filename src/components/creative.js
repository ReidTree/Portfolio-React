import React, { Component } from 'react';
import Rt from './route';

class Creative extends Component {
  render() {
    return (
      <div>
        <img className="miCapLogo" src="../imgs/micapital-stack.png" />
        <p>MICAPITAL is a financial firm based in Michigan. Specializing in creating tactical investment portfolios for their clients. </p>
        <a target="_blank" href="https://micapitaladvisors.com/"> visit MI Capital </a>
        <Rt.PageTitle title="CREATIVE" />
      </div>
    );
  }
}

export default Creative;
