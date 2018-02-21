import React, { Component } from 'react';
import webImages from './images';
import Rt from './route';

class BarLine extends Component {
  render() {
    return (
      <div className="break-bar-outer" style={this.props.barWidth}>
        <div className="break-bar-inner" style={this.props.barHeight}></div>
      </div>
    );
  }
}

class Star extends Component {
  render() {
    return (
      <img className="starBreak" style={this.props.star}  src={webImages.star} alt="" />

    );
  }
}

class BarBetween extends Component {
  render() {
    const w = Rt.Res.sizeExport.sW;
    console.log(w, "thiahrs")
    var hCalc = ((w * .03)/3) + "px";
    const barWidth = {"width": (w * .88) + "px","padding": "0 " + (w * .01) + "px" };

    const barHeight = {"height": hCalc, "borderTop": hCalc + " solid black",};

    const stars = {"width": (w * .03) + "px", "margin":  "0 " + (w*.01) + "px",};

    const cWidth = {"width": w + "px",};

    return (
      <div className="contentBreak" style={cWidth}>
        <Star star={stars} />
        <BarLine barWidth={barWidth} barHeight={barHeight} />
        <Star star={stars} />
      </div>
    );
  }
}

export default BarBetween;
