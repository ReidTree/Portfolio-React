import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Route from './route';

var mouseEvent = "mouseleave";
var mktGif = "https://gph.is/23LJbZv";
var codeGif = "https://gph.is/1K7BG9F";
var designGif = "https://gph.is/28Smfn5";

class AboutContent extends Component {
  render() {
    return (
      <div className="aboutWrap" style={{backgroundPosition: this.context.style}}>
        <div className="imgFade">
          <Route.PageTitle title="MORE" />
        </div>
      </div>
    );
  }
}


class CircleCont extends Component {
  render() {
    var head = this.props.head;
    return (
      <div className="circleCont">
        <div className="circleWrap">
          <div className="circleIcons">
            {this.props.children}
          </div>
            <h4>{head}</h4>
        </div>
      </div>
    );
  }
}
class CircleIcons extends Component {
  render() {
    var wait = this.props.wait ? this.props.wait : " ";
    return (
      <div>
        <CircleCont head="Wed Development">
          <img src="http://flaticons.net/gd/makefg.php?i=icons/Wildlife/Web.png&r=241&g=90&b=36" className={"circleInit " + wait} />
        </CircleCont>

        <CircleCont head="Marketing">
          <img src="http://flaticons.net/gd/makefg.php?i=icons/Shopping/Dollar-Tag.png&r=241&g=90&b=36" className={"circleInit " + wait} />
        </CircleCont>

        <CircleCont head="Design">
          <img src="http://flaticons.net/gd/makefg.php?i=icons/Education/Stationery-01.png&r=241&g=90&b=36" className={"circleInit " + wait} />
        </CircleCont>

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
      wait: undefined,
    };
  }

  handleMouseEnter(event){
    mouseEvent = event.type;
  }
  handleMouseLeave(event){
    mouseEvent = event.type;
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
    setTimeout(() => {self.setState({wait: "circleAnimate"}) }, 500);
  }


  render() {
    return(
      <div className="summary">
        <div className="beautiful" >
          <h3>Developing Beautiful Web</h3>
        </div>
        <CircleIcons wait={this.state.wait} />
        <div id="aboutMouse" onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
          <AboutContent className="about-wrap" />
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
