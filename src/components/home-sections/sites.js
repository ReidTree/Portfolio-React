import React, { Component } from 'react';
import Rt from '../route';
import logo from '../../imgs/156.png';
import "./sites.css";

//////////////// SITES ////////////////
class ContainBars extends Component {
  render() {
    const ps = this.props.info;
    return (
      <div className={"containBars " + ps.brandActive} onClick={this.props.handClick}>
        <div  className="bar topBar"></div>
        <div className="containBarContent">
          <img className="containBarImage" src={ps.image} alt={ps.title}/>
        </div>
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
      this.setState((prevState) => ({handleExpand: "See Less", expandAbout: "Marketing focused on the end user, their interface and experience while using the site. Design focused on aesthetics, feel and layout. Problem Solving along the way to configure my projects with the right code needed to make my layouts come to life. Below, you will find my two biggestest projects. If you would like to see more, click on the more sites link below."}))
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
    }
    const gathr = {
      title: "Gathr",
      image: Rt.webImages.heroku,
      brandActive: (this.state.rightActive ? "brandActive" : ""),
    }
    return(
      <Rt.HomeLayout title="Trierweiler Sites" >
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
