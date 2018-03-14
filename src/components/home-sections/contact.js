import React, { Component } from 'react';
import Rt from '../route';
import './contact.css';

class HomeContact extends Component {
  render() {
    return (
      <div className="contact-container" >
        <div className="contact-wrap">
          <div className="pageTitleWrap">
            <h3 className="pageTitle"> CONTACT </h3>
          </div>
        </div>
        <div className="contact-text" >
          <p>If you are interested in working with Trierweiler Creates, or you want to express your emtion about my work. </p>
          <p> Just email <a href="mailto:rt.trierweiler@gmail.com">CLICK HERE</a>. Any emotional response tolorated and celebrated. </p>
        </div>
      </div>
    );
  }
}

export default HomeContact;
