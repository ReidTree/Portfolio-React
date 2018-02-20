import React, { Component } from 'react';

class BarLine extends Component {
  render() {
    return (
      <div className="break-bar-outer" style={this.props.totalWidth}>
        <div className="break-bar-inner"></div>
      </div>
    );
  }
}

class Star extends Component {
  render() {
    return (
      <img className="starBreak" style={this.props.star}  src="http://flaticons.net/gd/makefg.php?i=icons/Shapes/Shape-Star2.png&r=241&g=90&b=36" alt="" />

    );
  }
}

class BarBetween extends Component {
  render() {
    const wWidth = this.props.widthThis;
    const barWidth = {"width": (wWidth * .9) + "px","padding": "0 " + (wWidth * .05) + "px" };
    const stars = {"width": (wWidth * .03) + "px", "margin":  (wWidth*.02) + "px"};
    const cWidth = {"width": wWidth + "px"}
    return (
      <div className="contentBreak" style={cWidth}>
        <Star star={stars} />
        <Star star={stars} />
        <BarLine totalWidth={barWidth} />
        <Star star={stars} />
        <Star star={stars} />
      </div>
    );
  }
}

export default BarBetween;
