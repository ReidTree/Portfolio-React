import React, { Component } from 'react';
import Rt from '../route';

//////////////// SITES ////////////////
class HomeSites extends Component {

  render() {
    const pMed = {
      title: "Proverimed.com",
      image: "../imgs/156.jpg",
      type: "siteMotion",
    }
    const gathr = {
      title: "Gathr",
      image: Rt.webImages.heroku,
      type: "siteMotion",
    }
    const sitesDirect = {
      title: "sites",
      type: "moreDirect",
    }
    return(
      <Rt.HomeLayout >
        <div className="beautiful" >
          <h3>Trierweiler Sites</h3>
        </div>
        <div className="siteCont" >
          <div className="siteWrap" >
            <Rt.Layout objPass={pMed} />
            <Rt.Layout objPass={gathr} />
          </div>
        </div>
        <Rt.Layout objPass={sitesDirect}/>
      </Rt.HomeLayout >
    );
  }
}
/////////////////////////////////////////////

export default HomeSites;
