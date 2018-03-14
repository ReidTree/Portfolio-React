import React, { Component } from 'react';
import Rt from '../route';
import './circle.css';

// circles in HomePage.About receives prop wait from state
class Circle extends Component {
  Layout(x,y,z) {
    return (
      <div className="circleCont">
        <div className="circleWrap">
          <div className="circleIcons">
             <img src={x} className={y} />
          </div>
            <h4>{z}</h4>
        </div>
      </div>
    );
  }

  render() {
    var wait = this.props.wait ? this.props.wait : " ";
    const imgClass = "circleInit " + wait;
    return (
      <div className="contentContainer">
        {this.Layout(Rt.webImages.webDevImg, imgClass, "Wed Development")}
        {this.Layout(Rt.webImages.mktImg, imgClass, "Marketing")}
        {this.Layout(Rt.webImages.designImg, imgClass, "Graphic Design")}
      </div>
    );
  }
}

export default Circle;
