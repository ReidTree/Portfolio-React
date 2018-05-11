import React, { Component } from 'react';
import Rt from '../route';
import './about.css';

// var mouseEvent = "mouseleave";

//////////////// ABOUT ////////////////
class HomeAbout extends Component {
  constructor(props){
    super(props)
    this.state = {
      wait: undefined,
    };
  }

  componentDidMount() {
    // var self = this;
    this.timer = setTimeout(() => this.tick(), 500);
  }

  componentWillUnMount() {
    clearTimeout(this.timer);
  }

  tick() {
    this.setState((prevState) => ({wait: "circleAnimate"}))
  }

  render() {
    return(
      <Rt.HomeLayout title="Delightful Web Development">
        <p className="about-summary serif w-100">Trierweiler Creates is dedicated to merging best practices in Web Development, Marketing and Graphic Design. Positioning your web pages to maximize your customers&rsquo; attention while ensuring usability. With years of Graphic Design experience, a degree in Marketing and over a year experience of Web Development, Trierweiler Creates offers all these expertise to support your company&rsquo;s web needs.</p>
        <div className="about-summary serif  w-100" >
        </div>
        <Rt.Circle wait={this.state.wait} />
        <Rt.MoreButton title="about" />
      </Rt.HomeLayout >
    );
  }
}
///////////////////////////////////////

export default HomeAbout;


  // <p>I am an avid student consistently seeking growth in knowledge and skill.  Most recently, my studious passions lead me to Grand Circus Coding Bootcamp in Detroit, MI. I aim to leverage my skills, drive, knowledge of web development, design and marketing to find a company upon which I will add daily value and build a career as a web developer.</p>
