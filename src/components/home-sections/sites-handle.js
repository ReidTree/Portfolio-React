import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import './sites-handle.css';


class SitesHandle extends Component {
  constructor(props){
    super(props)
    this.state = {
      motion: 60,
      style: "0 0",
      mouse: 'mouseleave',
    };
    this.mouseEvt = "mouseleave";
    this.handleSiteMouseEnter = this.handleSiteMouseEnter.bind(this);
    this.handleSiteMouseLeave = this.handleSiteMouseLeave.bind(this);
  }

  handleSiteMouseEnter(event){
    this.mouseEvt = event.type;
    console.log(event.view)
  }
  handleSiteMouseLeave(event){
    this.mouseEvt = event.type;
    console.log(event)
  }

  motionState() {
    const imgPostion = this.state.motion;
    const speed = 1;
    var current = (this.mouseEvt === "mouseleave") ? imgPostion + speed : imgPostion - speed;
    return {
      motion: current,
      style: imgPostion + "px 0"
    }
  }

  componentDidMount() {
    var self = this;
    setInterval(function(){
        self.setState(self.motionState);
    }, 50)
  }

  render() {
    const ps = this.props.objPass;
      return (
        <div onMouseEnter={this.handleSiteMouseEnter} onMouseLeave={this.handleSiteMouseLeave} className={"iSiteCont " + ps.title}>
          <div className={"iSiteWrap " + ps.title}>
            <div className={"iSiteImgBox " + ps.title} >
              <img className={"iSiteImg " + ps.title} src={ps.image} />
            </div>
            <div className={"iSiteSummary " + ps.title} >
              <span>{ps.summary}</span>
            </div>
          </div>
        </div>
      );
  }
}

export default SitesHandle;
