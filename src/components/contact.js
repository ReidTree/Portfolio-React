import React, { Component } from 'react';
import Rt from './route';

class Contact extends Component {
  render() {
    return (
      <div className="contact-container" >
        <div className="contact-wrap">
          <Rt.PageTitle title="CONTACT" />
        </div>
      </div>
    );
  }
}

export default Contact;
