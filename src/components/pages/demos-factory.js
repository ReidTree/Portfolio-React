import React, { Component } from 'react';
import Rt from "../route";
import gathrLogo from '../../imgs/gathrall.png';
import pMedLogo from '../../imgs/156.png';
import miCapital from '../../imgs/miCapital.png';
import trueWrap from '../../imgs/trueWrap.png';
import tCreates from '../../imgs/TrierweilerCreates-nrm-OngBlk.png';
import snapFilters from './snapchat';
import gitOctopus from '../../imgs/git.png';

import "./demos-factory.css";


const demoData = [
    {
    title: "Gathr",
    image: gathrLogo,
    id: 1,
    tags: "site",
    description: ["Gathr makes it easier for friends, coworkers, parents or anyone looking to plan a function for communal events to coordinate, organize and communicate with their attendees. As a team, we developed the front-end framework for the app using AngularJS for JavaScript and Bootstrap for HTML and CSS. AngularJS creates an ease of MVC workflow, also handling restful APIs to compose blissful UX. Bootstrap allows us to create clean layout of the web pages efficiently, and maintains simple UI. Packing the AngularJS’ custom directives with Bootstrap, allowed us to cut down on some of the bulking code Bootstrap is know to have. We used jQuery to access DOM elements seamlessly. Using NodeJS packages like ExpressJS to handle our database API requests and Nodemon for automatic source code refresh. We created the database using PostgreSQL. We hosted everything on a Heroku Web server. We used Github as our version control."],
    link: "http://gathr-app.herokuapp.com",
  }, {
    title: "Proverimed",
    image: pMedLogo,
    id: 2,
    tags: "site",
    description: ["Proverimed is an medical insurance verification clearinghouse, looking to automate insurance verification process. I was asked to build a prototype for desktop presentations to show to potential business partners.  Using AngularJS and Bootstrap to build the site. I able to create multiple unique views with working routing between them. Using Webpack to automatically package the source files to update browser. NodeJS as a package manager. "],
    link: "https://proverimed.com/#!/home",
  },{
    title: "MI Capital",
    image: miCapital,
    id: 3,
    tags: "design",
    description: ["A friend of mine, Trent Grzegorczyk, came to me and told me about a business he was just about to start. A Capital Investment Advisory Firm in Traverse City Michigan. He was going to name it MICAPITAL. I liked the name. He knew that I work with graphic design, so he asked if I could make his logo. I agreed, and work started. He wanted something simple, trusting and modern. Only using the letters found in “MI CAPITAL”. I like the idea of using two types of similar fonts, both with separate weights to show contrast. Also, we decided that sky blue was a color that would show trust and yet still look professional. After a few working prototypes, I produced what you see above. You can learn more about MICAPITAL by clicking on the link below."],
    link: "http://micapitaladvisors.com/",
  }, {
    title: "True Wrap",
    image: trueWrap,
    id: 4,
    tags: "design",
    description: ["True Wrap LLC is primarily a Tyvek wrapping contracting company. Although they have this primary focus, they aim to branch out into other house construction contracting work. Most recently, they started doing siding. They wanted a logo that incorporated their name, but did not only position them solely as a wrapping contractor. They liked having a house in the logo, so through a handful of design concepts. We started moving forward with the color green and a more detailed house. The image you see above, is what we agreed upon to be their final logo."],
    link: "",
  }, {
    title: "Trierweiler Creates",
    image: tCreates,
    id: 5,
    tags: "design",
    description: ["This site was an effort to bring together all of my current work for show. I thought it would be a great challenge to try and learn a new framework in the process. I decided to build this site with ReactJS. Up until this point, I have only really spent times with AngularJS, and other libraries like jQuery. I wanted to branch out. What better way, I thought, than learning how to build with ReactJS. The steps to build this site weren’t the most glamorous, but it was great experience.",
    "I came to learn many great aspects of React. How easy it is to build components with JSX and reuse them in other places. One example of this is the circles on the home page are used again in the about page. I found this to be very simple concept, yet powerful if used right. I by no means made this site perfectly. I am still finding things that I could have done better every day. I attempt to make them better, but this is a process that I foresee to last as long as my site does.",
    "will likely be updating many aspects of this site in the coming time. Including this very description. "],
    link: "http://www.trierweilercreates.com",
  },
]

class DemoBuild extends Component {

  demoDescription() {
    const demoInfo = this.props.demoData;
    return (
      <div>
        <h3 className="helv w-300"> {demoInfo.title} </h3>
        <p className="serif"> {demoInfo.description} </p>
        <div className="linked-sites">
          <a href={demoInfo.link}>{demoInfo.link}</a>
        </div>
      </div>
    );
  }

  render() {
    const ps = this.props;
    const demo = ps.demoData;
    const psClick = ps.click;
    var description =  [''];
    var aStyle = '';
    var demoLink = '';
    if (ps.aState.activeDemo === demo.title) {
      description = demo.description;
      aStyle = "brandActive";
      if (demo.link !== "") {
        demoLink = demo.link;
      }
    }
    return (
      <div key={demo.id} onClick={psClick} className={"containBars " + aStyle} >
        <div  className="bar topBar"></div>
        <div className="containBarContent">
          <img className="containBarImage" src={demo.image} alt={demo.title}/>
        </div>
        <div className="demoTextContain">
          {description.map((descr, index) => (
            <p className="demoText" key={index} >
              {descr}
            </p>
          ))}

          <div className="linked-sites">
            <a href={demoLink}>{demoLink}</a>
          </div>
        </div>
        <div className="bar bottomBar"></div>
      </div>
    )
  }
}



class Demos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descActive: false,
      activeDemo: "",
      activeDescription: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(x){
    const self = this;
    var desSet = self.state.descActive ? false : true;
    self.setState((prevState) => ({
      descActive: desSet,
      activeDemo: x.title,
      activeDescription: x.description,
    }));
  }

  render() {
    return (
      <Rt.HomeLayout title="Sites, Demos and Designs" custom="sitesPage">

        <p className="serif"> Here are some of my sites and demos created by Trierweiler Creates. More demos are on there way to be added to the site. </p>

        {demoData.map(demo => (
          <DemoBuild key={demo.id} click={() => (this.handleClick(demo))} demoData={demo} aState={this.state} />
        ))}

        <div className="github-projects">
          <p className="serif w-100 github-text">The above projects are just a preview of my work. See more at my GitHub page.</p>
          <div className="gitBtn-wrap">
            <a className="gitLink" href="https://github.com/ReidTree">
            <button className="gitBtn"  name="gitButton" type="button"><img className="gitImage" src={gitOctopus} />
                <span className="gitBtn-text">GitHub</span>
            </button>
            </a>
          </div>
        </div>

      </Rt.HomeLayout>
    );
  }
}

export default Demos;

// <div className="demoDescription">
//   <h3 className="helv w-100">{this.state.activeDemo}</h3>
//   <p className="serif w-300">{ this.state.activeDescription }</p>
// </div>

// <DemoBuild click={this.handleClick(demoData.gathr.title)} demoData={demoData.gathr} />
// <DemoBuild click={this.handleClick(demoData.pMed.title)} demoData={demoData.pMed} />
