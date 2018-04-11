import React, { Component } from 'react';
import Rt from './../route';
import {BrowserRouter as Router, Link} from "react-router-dom";
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
    this.setState({
      motion: current,
      style: imgPostion + "px 0"
    })
  }

  componentDidMount() {
    var self = this;
    var intervalId = setInterval(function(){ self.motionState(); }, 50)
    this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
   clearInterval(this.state.intervalId);
 }

  render() {
    var title = "creations";
    const self = this;
    Rt.gists.forEach(function(e){
      title = (e.id === self.props.title) ? self.props.title : title;
    });
    // const title = this.props.title;
    return (
      <div id={title + "Mouse"} className="moreMouse" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <Link style={{"textDecoration": "none"}} to={"/" + title}>
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
