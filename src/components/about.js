import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rt from './route';
import webImages from './images';

var mouseEvent = "mouseleave";

class CircleLayout extends Component {
  render() {
    var head = this.props.head;
    return (
      <div className="circleCont">
        <div className="circleWrap">
          <div className="circleIcons">
             <img src={this.props.image} className={this.props.imgClass} />
          </div>
            <h4>{head}</h4>
        </div>
      </div>
    );
  }
}

class Circle extends Component {
  render() {
    var wait = this.props.wait ? this.props.wait : " ";
    const imgClass = "circleInit " + wait;
    return (
      <div className="contentContainer">
        <CircleLayout head="Wed Development" image={webImages.webDevImg} imgClass={imgClass} />
        <CircleLayout head="Marketing" image={webImages.mktImg} imgClass={imgClass} />
        <CircleLayout head="Graphic Design" image={webImages.designImg} imgClass={imgClass} />
      </div>
    );
  }
}

class AboutLayout extends Component {
  render() {
    return (
      <div id="aboutMouse" onMouseEnter={this.props.mouseEnter} onMouseLeave={this.props.mouseLeave}>
        <div className="aboutWrap" style={{backgroundPosition: this.context.style}}>
          <div className="imgFade">
            <Rt.PageTitle title="MORE" />
          </div>
        </div>
      </div>
    );
  }
}

AboutLayout.contextTypes = {
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
      wait: undefined,
    };
  }

  handleMouseEnter(event){ mouseEvent = event.type; }

  handleMouseLeave(event){ mouseEvent = event.type; }

  getChildContext() { return {style: this.state.motion+"px 0"} }

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
    setTimeout(() => {self.setState({wait: "circleAnimate"}) }, 500);
  }


  render() {
    return(
      <div className="summary contentContainer">
        <div className="contentWrap" >
          <div className="beautiful" >
            <h3>Developing Beautiful Web</h3>
          </div>
          <Circle wait={this.state.wait}  />
          <AboutLayout mouseEnter={this.handleMouseEnter}
            mouseLeave={this.handleMouseLeave} />
        </div>
      </div>
    );
  }
}

About.childContextTypes = {
  style: PropTypes.string
};

export default About;


  // <p>I am an avid student consistently seeking growth in knowledge and skill.  Most recently, my studious passions lead me to Grand Circus Coding Bootcamp in Detroit, MI. I aim to leverage my skills, drive, knowledge of web development, design and marketing to find a company upon which I will add daily value and build a career as a web developer.</p>
