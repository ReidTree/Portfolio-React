import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rt from './route';
import webImages from './images';
import "../css/sites.css";


class SitesLayout extends Component {
  render() {
    return (
      <div className="iSiteCont">
        <div className="iSiteWrap">
          <div className="iSiteImgBox" >
            <img className={"iSiteImg " + this.props.title} src={this.props.image} />
          </div>
        </div>
      </div>
    );
  }
  // <h4 className="iSiteHead">{this.props.title}</h4>
}

class Sites extends Component {
  render() {
    return(
      <div className="contentContainer">
        <div className="contentWrap">
          <div className="beautiful" >
            <h3>Trierweiler Sites</h3>
          </div>
          <div className="siteCont" >
            <div className="siteWrap" >
              <SitesLayout title="Proverimed.com" image="../imgs/156.jpg"  />
              <SitesLayout title="Gathr" image={webImages.heroku} />
            </div>
          </div>
          <Rt.PageTitle title="SITES" />
        </div>
      </div>
    );
  }
}


export default Sites;
