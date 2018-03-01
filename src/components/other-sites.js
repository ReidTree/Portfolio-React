import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rt from './route';
import webImages from './images';
import "../css/sites.css";

var mouseEvent = "mouseLeave";

class SitesLayout extends Component {
  render() {
    return (
      <div onMouseEnter={this.props.mouseEnter} onMouseLeave={this.props.mouseLeave} className="iSiteCont">
        <div className="iSiteWrap">
          <div className="iSiteImgBox" >
            <img className={"iSiteImg " + this.props.title} src={this.props.image} />
          </div>
        </div>
      </div>
    );
  }
  // <h4 className="iSiteHead">{this.props.title}</h4>
}

class Sites extends Component {
  constructor(props){
    super(props)
    this.state = {
      motion: 60,
      speed: 1,
      style: "0 0",
      mouse: 'mouseleave',
      wait: undefined,
    };
  }
  //
  handleMouseEnterPro(event){
    console.log("Pro")
    mouseEvent = event.type; }

  handleMouseLeavePro(event){ mouseEvent = event.type; }

  handleMouseEnterGathr(event){
    console.log("Gathr")
    mouseEvent = event.type; }

  handleMouseLeaveGathr(event){ mouseEvent = event.type; }

  render() {
    return(
      <div className="contentContainer">
        <div className="contentWrap">
          <div className="beautiful" >
            <h3>Trierweiler Sites</h3>
          </div>
          <div className="siteCont" >
            <div className="siteWrap" >
              <SitesLayout mouseEnter={this.handleMouseEnterPro}
                mouseLeave={this.handleMouseLeavePro} title="Proverimed.com" image="../imgs/156.jpg" />
              <SitesLayout mouseEnter={this.handleMouseEnterGathr}
                mouseLeave={this.handleMouseLeaveGathr} title="Gathr" image={webImages.heroku} />
            </div>
          </div>
          <Rt.PageTitle title="SITES" />
        </div>
      </div>
    );
  }
}


export default Sites;
