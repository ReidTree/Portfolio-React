import React, { Component } from 'react';
import Rt from '../route';

var mouseEvent = "mouseleave";

//////////////// ABOUT ////////////////
class DesignExamples extends Component {
  constructor(props){
    super(props)
    this.state = {
      wait: undefined,
    };
  }

  componentDidMount() {
    var self = this;
    this.timer = setTimeout(() => this.tick(), 500);
  }

  componentWillUnMount() {
    clearTimeout(this.timer);
  }

  tick() {
    this.setState({wait: "circleAnimate"})
  }

  render() {
    const moreStructure = {
      title: "about",
      type: "moreDirect",
    }
    return(
      <Rt.HomeLayout >
        <div className="beautiful" >
          <h3>Developing Beautiful Web</h3>
        </div>
        <div className="about-summary" >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <Rt.Circle wait={this.state.wait}  />
        <Rt.Layout objPass={moreStructure} />
      </Rt.HomeLayout >
    );
  }
}
///////////////////////////////////////

export default DesignExamples;


  // <p>I am an avid student consistently seeking growth in knowledge and skill.  Most recently, my studious passions lead me to Grand Circus Coding Bootcamp in Detroit, MI. I aim to leverage my skills, drive, knowledge of web development, design and marketing to find a company upon which I will add daily value and build a career as a web developer.</p>
