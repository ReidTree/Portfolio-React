import React, { Component } from 'react';
import Rt from '../route';

//////////////// SITES ////////////////
class HomeSites extends Component {

  render() {
    const pMed = {
      title: "Proverimed",
      image: "../imgs/156.jpg",
      type: "siteMotion",
      summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }
    const gathr = {
      title: "Gathr",
      image: Rt.webImages.heroku,
      type: "siteMotion",
      summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }

    return(
      <Rt.HomeLayout title="Trierweiler Sites" >
        <div className="about-summary" >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="siteCont" >
          <div className="siteWrap" >
            <div className="siteOverflow" >
              <Rt.SitesHandle objPass={pMed} />
              <Rt.SitesHandle objPass={gathr} />
            </div>
          </div>
        </div>
        <Rt.MoreButton title="sites"/>
      </Rt.HomeLayout >
    );
  }
}
/////////////////////////////////////////////

export default HomeSites;
