import React, { Component } from 'react';
import Rt from '../route';

// var mouseEvent = "mouseleave";

//////////////// ABOUT PAGE ////////////////
class AboutPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      wait: undefined,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.tick(), 500);
  }

  componentWillUnMount() {
    clearTimeout(this.timer);
  }

  tick() {
    this.setState({wait: "circleAnimate"})
  }

  render() {
    return(
      <Rt.HomeLayout >
        <div className="beautiful" >
          <h3>Developing Beautiful Web</h3>
        </div>
        <div className="about-summary" >
          <p>Dedicated to merging best practices in Web Development, Marketing and Graphic Design. Trierweiler Creates helps position your web pages to meet your customers user needs to ensure usability. With years of Graphic Design experience, a degree in Marketing and over a year as a Web Developer, Trierweiler Creates offers all these expertise to support your company’s web needs.</p>
        </div>
        <Rt.Circle wait={this.state.wait}  />
      </Rt.HomeLayout >
    );
  }
}
///////////////////////////////////////

export default AboutPage;


  // <p>I am an avid student consistently seeking growth in knowledge and skill.  Most recently, my studious passions lead me to Grand Circus Coding Bootcamp in Detroit, MI. I aim to leverage my skills, drive, knowledge of web development, design and marketing to find a company upon which I will add daily value and build a career as a web developer.</p>
