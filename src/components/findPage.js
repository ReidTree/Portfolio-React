import React, { Component } from 'react';
import Rt from './route';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

class FindPage extends Component {
  render(){
    const page = this.props.page
    if (page === 'about') {
      return <Rt.AboutPage/>
    } else if (page === 'sites') {
      return <Rt.SiteExamples/>
    } else if (page === 'design') {
      return <Rt.DesignExamples/>
    } else {
      return <Redirect to="/" component={Rt.Home} />
    }
  }
}

export default FindPage;
