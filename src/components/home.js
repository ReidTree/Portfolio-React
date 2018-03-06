import React, { Component } from 'react';
import Rt from './route';

class Home extends Component {
  render() {
    const sizeExport = Rt.Res.sizeExport;
    const sH = sizeExport.sH;
    const sW = sizeExport.sW;
    const sY = sizeExport.sY;
    return (
        <div>
          <Rt.HomeAbout />
          <Rt.StarBar sizeExport={sizeExport}/>
          <Rt.HomeSites sW={sW} sH={sH}/>
          <Rt.StarBar sizeExport={sizeExport}/>
          <Rt.HomeDesign />
          <Rt.HomeContact />
        </div>
    );
  }
}

export default Home;
