import React, { Component } from 'react';
import Rt from '../route';

class StarBar extends Component {
  render() {
    const w = this.props.sizeExport.sW;
    var hCalc = ((w * .03)/3) + "px";
    const barWidth = {"width": (w * .88) + "px","padding": "0 " + (w * .01) + "px" };
    const barHeight = {"height": hCalc, "borderTop": hCalc + " solid black",};
    const stars = {"width": (w * .03) + "px", "margin":  "0 " + (w*.01) + "px",};
    const cWidth = {"width": w + "px",};

    return (
      <div className="contentBreak" style={cWidth}>
        <img className="starBreak" style={this.star}  src={Rt.webImages.star} alt="star icon" />
        <div className="break-bar-outer" style={barWidth}>
          <div className="break-bar-inner" style={barHeight}></div>
        </div>
        <img className="starBreak" style={this.star}  src={Rt.webImages.star} alt="star icon" />
      </div>
    );
  }
}
export default StarBar;
