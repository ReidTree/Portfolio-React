import React, { Component } from 'react';
import Rt from '../route';

class StarBar extends Component {
  render() {
    const sWidth = this.props.sizeExport.sW;
    var hCalc = (sWidth * .01) + "px";
    var barW = (sWidth * .76) + "px";
    var starM = (sWidth * .04) + "px"
    var starW = (sWidth * .03) + "px";

    const barWidth = {
      "width": barW,
      "padding": "0 " + hCalc,
    };
    const barHeight = {
      "height": hCalc,
      "borderTop": hCalc + " solid black",
    };
    const stars = {
      "width": starW,
      "margin": "0 " + starM,
    };
    const cWidth = {"width": sWidth + "px",};

    return (
      <div className="contentBreak" style={cWidth}>
        <img className="starBreak" style={stars}  src={Rt.webImages.star} alt="star icon" />
        <div className="break-bar-outer" style={barWidth}>
          <div className="break-bar-inner" style={barHeight}></div>
        </div>
        <img className="starBreak" style={stars}  src={Rt.webImages.star} alt="star icon" />
      </div>
    );
  }
}
export default StarBar;
