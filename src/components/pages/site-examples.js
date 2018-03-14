import React, { Component } from 'react';
import Rt from '../route';

var mouseEvent = "mouseleave";

//////////////// SITE EXAMPLES ////////////////
class SiteExamples extends Component {
  render() {
    const pMed = {
      title: "Proverimed.com",
      image: "../imgs/156.jpg",
      type: "siteMotion",
    }
    const gathr = {
      title: "Gathr",
      image: Rt.webImages.heroku,
      type: "siteMotion",
    }
    const sitesDirect = {
      title: "sites",
      type: "moreDirect",
    }
    return(
      <Rt.HomeLayout >
        <div className="beautiful" >
          <h3>Trierweiler Sites</h3>
        </div>
        <div className="about-summary" >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="siteCont" >
          <div className="siteWrap" >
            <Rt.Layout objPass={pMed} />
            <Rt.Layout objPass={gathr} />
          </div>
        </div>
        <Rt.Layout objPass={sitesDirect}/>
      </Rt.HomeLayout >
    );
  }
}
///////////////////////////////////////

export default SiteExamples;


  // <p>I am an avid student consistently seeking growth in knowledge and skill.  Most recently, my studious passions lead me to Grand Circus Coding Bootcamp in Detroit, MI. I aim to leverage my skills, drive, knowledge of web development, design and marketing to find a company upon which I will add daily value and build a career as a web developer.</p>
