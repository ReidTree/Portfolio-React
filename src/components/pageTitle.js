import React, { Component } from 'react';

class PageTitle extends Component {
  render() {
    return (
      <div className="pageTitleWrap">
        <h3 className="pageTitle"> {this.props.title} </h3>
      </div>
    );
  }
}

export default PageTitle;
