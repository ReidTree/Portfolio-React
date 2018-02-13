import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Route from './route';

class SitesContent extends Component {
  render() {
    return (
      <div className="siteWrap" style={{backgroundPosition: this.context.style}}>
        <div className="other-wrap">
          <Route.PageTitle title="SITES" />
        </div>
      </div>
    );
  }
}

SitesContent.contextTypes = {
  style: PropTypes.string
};

class Sites extends Component {
  constructor(props){
    super(props)
    this.state = {
      motion: 60,
      speed: 1,
      style: "0 0",
    };
  }

  motionState() {
    var self = this;
    const imgPostion = self.state.motion;
    const speed = self.state.speed;
    if(imgPostion > -200 && imgPostion < 100){
      // console.log(imgPostion)
      return {
        motion: imgPostion + speed,
        style: "0 " + imgPostion  + "px"
      }
    } else {
      return {
        speed: -speed,
        motion: imgPostion - speed,
        style: "0 " + imgPostion + "px"
      }
    }
  }

  getChildContext() {
    return {style: "0 " + this.state.motion + "px"}
  }

  componentDidMount() {
    var self = this;
    setInterval(function(){
        self.setState(self.motionState)
    }, 50)
  }

  render() {
    return(
      <div id="aboutMouse" onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}>
        <SitesContent className="about-wrap" />
      </div>
    );
  }
}

Sites.childContextTypes = {
  style: PropTypes.string
};

export default Sites;
