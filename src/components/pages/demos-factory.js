import React, { Component } from 'react';
import Rt from "../route";
import gathrLogo from '../../imgs/gathrall.png';
import pMedLogo from '../../imgs/156.png';
import miCapital from '../../imgs/miCapital.png';
import trueWrap from '../../imgs/trueWrap.png';
import tCreates from '../../imgs/TrierweilerCreates-nrm-OngBlk.png';
import snapFilters from './snapchat';


import "./demos-factory.css";


const demoData = [
    {
    title: "Gathr",
    image: gathrLogo,
    id: 1,
    tags: "site",
    description: "Gathr makes it easier for friends, coworkers, parents or anyone looking to plan a function for communal events to coordinate, organize and communicate with their attendees. As a team, we developed the front-end framework for the app using AngularJS for JavaScript and Bootstrap for HTML and CSS. AngularJS creates an ease of MVC workflow, also handling restful APIs to compose blissful UX. Bootstrap allows us to create clean layout of the web pages efficiently, and maintains simple UI. Packing the AngularJS’ custom directives with Bootstrap, allowed us to cut down on some of the bulking code Bootstrap is know to have. We used jQuery to access DOM elements seamlessly. Using NodeJS packages like ExpressJS to handle our database API requests and Nodemon for automatic source code refresh. We created the database using PostgreSQL. We hosted everything on a Heroku Web server. We used Github as our version control.",
  }, {
    title: "Proverimed",
    image: pMedLogo,
    id: 2,
    tags: "site",
    description: "Proverimed is an Insurance Verify Company, looking to automate Insurance verification process. I was asked to build a prototype for desktop presentations to show to potential business partners.  Using AngularJS and Bootstrap to build the site. I able to create multiple unique views with working routing between them. Using Webpack to automatically package the source files to update browser. NodeJS as a package manager. ",
  },{
    title: "MI Capital",
    image: miCapital,
    id: 3,
    tags: "design",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  }, {
    title: "True Wrap",
    image: trueWrap,
    id: 4,
    tags: "design",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  }, {
    title: "Trierweiler Creates",
    image: tCreates,
    id: 5,
    tags: "design",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
]

class DemoBuild extends Component {

  isActive() {
    return (
      <div>
        <h3 className="helv w-300"> {this.props.demoData.title} </h3>
        <p className="serif"> {this.props.demoData.description} </p>
      </div>
    );
  }

  render() {
    const ps = this.props;
    const demo = ps.demoData;
    const psClick = ps.click;
    var description =  '';
    var aStyle = '';
    if (ps.aState.activeDemo === demo.title) {
      description = demo.description;
      aStyle = "brandActive";
      console.log(description)
    }
    return (
      <div key={demo.id} onClick={psClick} className={"containBars " + aStyle} >
        <div  className="bar topBar"></div>
        <div className="containBarContent">
          <img className="containBarImage" src={demo.image} alt={demo.title}/>
        </div>
        <div className="demoTextContain">
          <p className="demoText">
            {description}
          </p>
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
      <Rt.HomeLayout title="Demo Sites" custom="sitesPage">

        <p className="serif"> Here are some of my sites and demos created by Trierweiler Creates. More demos are on there way to be added to the site. </p>

        {demoData.map(demo => (
          <DemoBuild key={demo.id} click={() => (this.handleClick(demo))} demoData={demo} aState={this.state} />
        ))}

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
