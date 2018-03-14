import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import './more-buttons.css';

class MoreButton extends Component {
  constructor(props){
    super(props)
    this.state = {
      motion: 60,
      style: "0 0",
      mouse: 'mouseleave',
    };
    this.mouseEvt = "mouseleave";
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(event){ this.mouseEvt = event.type; }
  handleMouseLeave(event){ this.mouseEvt = event.type; }

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
    const title = this.props.title;
      return (
        <div id={title + "Mouse"} className="moreMouse" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          <Link style={{"textDecoration": "none"}} to={title}>
            <div className="aboutWrap" style={{backgroundPosition: this.state.style}}>
              <div className="imgFade">
                <div className="pageTitleWrap">
                  <h3 className="pageTitle"> MORE {title.toUpperCase()} </h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
  }
}

export default MoreButton;
