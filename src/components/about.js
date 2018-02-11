import React, { Component } from 'react';
import PropTypes from 'prop-types';

var mouseEvent = "mouseleave";

class AboutContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventType: "nothing"
    };
  }

  render() {
    return (
      <div className="aboutWrap" style={{backgroundPosition: this.context.style}}>
        <div className="imgFade">
          <div className="pageTitleWrap">
            <h3 className="pageTitle"> ABOUT ME </h3>
          </div>
        </div>
      </div>
    );
  }
}

AboutContent.contextTypes = {
  style: PropTypes.string
};

class About extends Component {
  constructor(props){
    super(props)
    this.state = {
      motion: 60,
      speed: 1,
      style: "0 0",
      mouse: 'mouseleave',
    };
  }

  handleMouseEnter(event){
    mouseEvent = event.type;
  }
  handleMouseLeave(event){
    mouseEvent = event.type;
  }
  contextUpdate() {
    console.log(mouseEvent)
    if(mouseEvent === "mouseleave"){
      this.setState({motion: this.state.motion + this.state.speed})
    } else {
      this.setState({motion: this.state.motion + -this.state.speed, speed: -this.state.speed})
    }
  }

  getChildContext() {
    return {style: this.state.motion+"px 0"}
  }

  motionState() {
    var self = this;
    const imgPostion = self.state.motion;
    const speed = self.state.speed;
    if(mouseEvent === "mouseleave"){
      return {
        motion: imgPostion + speed,
        style: imgPostion + "px 0;"
      }
    } else {
      return {
        motion: imgPostion - speed,
        style: imgPostion + "px 0;"
      }
    }
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
        <AboutContent className="about-wrap" />
      </div>
    );
  }
}

About.childContextTypes = {
  style: PropTypes.string
};

export default About;
