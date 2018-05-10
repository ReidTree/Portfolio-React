import React, { Component } from 'react';
import Rt from '../route';
import logo from '../../imgs/156.png';
import "./sites.css";

//////////////// SITES ////////////////
class ContainBars extends Component {
  descrToggle(ps){
    if(ps.brandActive === "brandActive") {
        return (
          <div>
            <p className="serif w-100 sites-home"> {ps.description} </p>
            <p className="linked-sites" >
              <a href={ps.link}>{ps.link}</a>
            </p>
          </div>
        );
    } else {
        return (
          <span hidden> </span>
        );
    }
  }

  render() {
    const ps = this.props.info;
    return (
      <div className={"containBars " + ps.brandActive} onClick={this.props.handClick}>
        <div  className="bar topBar"></div>
        <div className="containBarContent">
          <img className="containBarImage" src={ps.image} alt={ps.title}/>
        </div>
        {this.descrToggle(ps)}
        <div className="bar bottomBar"></div>
      </div>
    )
  }
}

class HomeSites extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      aboutSites: "Honing my passion for Marketing, Design and Problem Solving, jumping a career to Front End Web Development was a no brainer.",
      expandAbout: "",
      handleExpand: "See More",
      isActive: false,
      leftActive: false,
      leftBrand: "",
      rightActive: false,
      rightBrand: "",
    }
    this.handleExpandClick = this.handleExpandClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleExpandClick() {
    if(this.state.handleExpand === "See More") {
      this.setState((prevState) => ({handleExpand: "See Less", expandAbout: "Marketing focused on the end user, their interface and experience while using the site. Design focused on aesthetics, feel and layout. Problem Solving along the way to configure my projects with the right code needed to make my design layouts come to life. Below, you will find my two most detailed projects. If you would like to see more, click on the 'more sites' link below."}))
    } else {
      this.setState((prevState) => ({handleExpand: "See More", expandAbout: ""}))
    }
  }

  handleClick(x) {
    const activateField = this.state.isactive ? false : true;
    var lActive = this.state.leftActive;
    var rActive = this.state.rightActive;
    if (x === "l") {
      lActive = !lActive;
      rActive = false;
    }
    if (x === "r") {
      rActive = !rActive;
      lActive = false;
    }
    this.setState((prevState) => ({
      isactive: activateField,
      leftActive: lActive,
      rightActive: rActive,
    }))
  }

  render() {
    const pMed = {
      title: "Proverimed",
      image: logo,
      brandActive: (this.state.leftActive ? "brandActive" : ""),
      description: "Proverimed is an medical insurance verification clearinghouse, looking to automate insurance verification process. I was asked to build a prototype for desktop presentations to show to potential business partners. With only a weeks deadline, I produced the requested site. the final product can be seen below. I have since updated some aspects of the site, but the layout and general feel is much the same.",
      link: "https://www.proverimed.com",
    }
    const gathr = {
      title: "Gathr",
      image: Rt.webImages.heroku,
      brandActive: (this.state.rightActive ? "brandActive" : ""),
      description: "Gathr, the final project at Grand Circus Bootcamp. The Idea was to make potlucks simple. With a team of four, 2 week deadline and only 8 weeks into learning Front-End Wed Development, we managed to design useful web app. See it live in the link below. Party code: 'gc1234'. ",
      link: "http://gathr-app.herokuapp.com",
    }
    return(
      <Rt.HomeLayout title="Trierweiler Sites and Designs" >
        <div className="about-summary serif" >
          <p>{this.state.aboutSites} {this.state.expandAbout} <span className="seeMore" onClick={() => this.handleExpandClick()}>{this.state.handleExpand}</span></p>
        </div>
        <div className="siteCont" >
          <div className="siteWrap" >
            <div className="siteOverflow" >
              <ContainBars info={pMed} handClick={() => (this.handleClick("l"))} />
              <ContainBars info={gathr} handClick={() => (this.handleClick("r"))} />
            </div>
          </div>
        </div>
        <Rt.MoreButton title="sites"/>
      </Rt.HomeLayout >
    );
  }
}
/////////////////////////////////////////////

export default HomeSites;
