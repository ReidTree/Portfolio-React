import React, { Component } from 'react';
import Rt from '../route';
import {BrowserRouter as Router, Link} from "react-router-dom";
import "./about-page.css";
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
      <Rt.HomeLayout title="Delightful Web Development">
        <div className="about-summary serif w-100" >
          <p>Dedicated to merging best practices in Web Development, Marketing and Graphic Design. Trierweiler Creates helps position your web pages to meet your customers user needs to ensure usability. With years of Graphic Design experience, a degree in Marketing and over a year as a Web Developer, Trierweiler Creates offers all these expertise to support your company’s web needs.</p>
        </div>

        <div className="about-sections">
          <Rt.Circle wait={this.state.wait} name="web" >
            <span>
              <p className="web-paragraph serif w-100">I graduated from Grand Circus Bootcamp in August of 2017 focusing on Front-End Web Development. Grand Circus is a 10 week long intensive school built to teach new developers what they need to know to be successful in the field. During these 10 unforgettable weeks, we learned: HTML, CSS, JavaScript, NodeJS, AngularJS, PostgresSQL, jQuery, and so many more concepts essential to Web Design/ Development. We were tasked with daily challenges, or homework, which we would have to turn in the following morning. We also had two group projects, which you can see in my <Link to="/sites">works section</Link>.
              </p>
            </span>
            <span>
              <p className="web-paragraph serif w-100">We were trained in an agile setting. Each day we would meet to discuss what we would be doing during the day, and at the end of the day we would meet again to discuss what we had completed. We had weekly meetings to discuss what we learned the past seven days. If we had positive or negative feelings about something, we would bring them up during these meetings. Since our time at bootcamp was only 10 weeks long, there was not enough time to implement development sprints. </p>
            </span>
            <span>
              <p className="web-paragraph serif w-100">After Graduating from Grand Circus, I had my first role in the Web Design field. I accepted a role as a seasonal contracted Web Design Specialist with CDK Global through the holiday season. CDK is a technology services company for Car Dealership globally. My role was specific to request made by dealerships to update aspects of their webpages. Everything from landing pages, form fields, content creation, and most anything dealing with the design of a webpage. After CDK, I was asked to build prototype desktop site for <a href="https:// proverimed.com">Proverimed.com</a>. A medical start-up offering a warehouse for medical malpractice verification. They were so impressed by the webpage that they asked me to be part of their team.
              </p>
            </span>
          </Rt.Circle >
        </div>

        <div className="about-sections">
          <Rt.Circle wait={this.state.wait} name="mkt" >
            <span>
              <p className="web-paragraph serif w-100">I graduated from Central Michigan University in 2015 with a degree in Marketing and Logistics Management. With my degree, I attained a job as a Field Marketing Consultant for a regional Fast Casual chain restaurant. I work in there for a year and a half. In that time, I gained a great deal of professional marketing experience. Working with Local Store marketing budgets. Doing Business to Business marketing. Building relationships with store owners. Planning and fulfilling strategic marketing efforts put in place by high level Executives. Attending market test groups. Building presentations for Executives. The list goes on. This experience has shaped how I view the Business to Consumer relationship, and gives me a deeper understanding of marketing standards most any company should hold.</p>
            </span>
          </Rt.Circle >
        </div>

        <div className="about-sections extra-margin">
          <Rt.Circle wait={this.state.wait} name="design" >
            <span>
              <p className="web-paragraph serif w-100">Design has been a passion of mine seen I can remember. I have been using the adobe products for over 10 years. It started with Adobe Photoshop when I was ten. At first it was just a hobby. Editing photos of friends and family. However, I have found through college and my brief career in marketing, being able to edit creative assets is essential to maintain a brand. Knowing what type of file needed for production, how to produce that file and, through years of practice, making that file look good.</p>
            </span>
            <span>
              <p className="web-paragraph serif w-100">I find Adobe to have the best resources to complete most any creative project. Their creative suite has become a staple in my life. I have learned how to use Photoshop, Illuistrator, InDesign, PremierPro, Lightroom, Audition, Dreamweaver and Animate. Throughout my years of working with these applications, I have pro hundreds of creative assets for both professional and personal use. Some of my work can be found <Link to="/sites">HERE</Link>. Enjoy!</p>
            </span>
          </Rt.Circle >
        </div>

      </Rt.HomeLayout >
    );
  }
}
///////////////////////////////////////

export default AboutPage;


  // <p>I am an avid student consistently seeking growth in knowledge and skill.  Most recently, my studious passions lead me to Grand Circus Coding Bootcamp in Detroit, MI. I aim to leverage my skills, drive, knowledge of web development, design and marketing to find a company upon which I will add daily value and build a career as a web developer.</p>
