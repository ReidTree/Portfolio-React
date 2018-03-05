import React, { Component } from 'react';

class Layout extends Component {
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

  moreDirect(x) {
    return (
      <div className="aboutWrap" style={{backgroundPosition: this.state.style}}>
        <div className="imgFade">
          <div className="pageTitleWrap">
            <h3 className="pageTitle"> MORE {x.toUpperCase()} </h3>
          </div>
        </div>
      </div>
    );
  }

  siteMotion(x){
    return (
      <div className="iSiteWrap">
        <div className="iSiteImgBox" >
          <img className={"iSiteImg " + x.title} src={x.image} />
        </div>
      </div>
    );
  }

  render() {
    const ps = this.props.objPass;
    if (ps.type === "moreDirect"){
      return (
        <div id={ps.title + "Mouse"} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          {this.moreDirect(ps.title)}
        </div>
      );
    } else if (ps.type === "siteMotion"){
      return (
        <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} className="iSiteCont">
          {this.siteMotion(ps)}
        </div>
      );
    }
  }
}

export default Layout;
