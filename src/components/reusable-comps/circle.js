import React, { Component } from 'react';
import Rt from '../route';
import './circle.css';
import banner from './imgs/banner.gif';

// circles in HomePage.About receives prop wait from state
class Circle extends Component {
  Layout(x,y,z,a) {
    const floating = a || "circleCont"
    return (
      <div className={floating}>
        <div className="circleWrap">
          <div className="circleIcons">
             <img src={x} className={y} alt=""/>
          </div>
          <div className="titleBanner">
          <img className="circle-banner" src={banner} alt="" />
            <h4 className="circleHead snas w-300">{z}</h4>
          </div>
        </div>
      </div>
    );
  }

  render() {
    var wait = this.props.wait ? this.props.wait : " ";
    const imgClass = "circleInit " + wait;
    const name = this.props.name || false;
    if(name){
      if(name === "web"){
        return (
          <div>
            <h4 id="web-about-head"> Web Development </h4>
            {this.Layout(Rt.webImages.webDevImg, imgClass, "Wed Development", "about-page")}
            {this.props.children}
          </div>
        );
      } else if (name === "mkt") {
        return (
          <div>
            <h4 id="mkt-about-head"> Marketing </h4>
            {this.Layout(Rt.webImages.mktImg, imgClass, "Marketing", "about-page")}
            {this.props.children}
          </div>
        );
      } else if (name === "design") {
        return (
          <div>
            <h4 id="design-about-head"> Graphic Design </h4>
            {this.Layout(Rt.webImages.designImg, imgClass, "Graphic Design", "about-page")}
            {this.props.children}
          </div>
        );
      }
    }
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
