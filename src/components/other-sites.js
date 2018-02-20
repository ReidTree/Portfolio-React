import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Route from './route';

class SitesContent extends Component {
  render() {
    return (
      <div className="siteWrap">
        <div className="other-wrap">
          <Route.PageTitle title="SITES" />
        </div>
      </div>
    );
  }
}

class Sites extends Component {

  render() {
    return(
      <div id="aboutMouse">
        <SitesContent className="about-wrap" />
      </div>
    );
  }
}


export default Sites;
