import React, { Component } from 'react';
import Route from './route';
import Pop from './popStyle';

class PageClickComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: this.props.name,
      scrollTo: window.scrollY,
    };
    this.handleClick = this.handleClick.bind(this)
    this.scrollTo = 0;
    this.top= 0;
    this.scrollPage = {

    }
  }

  handleClick(pages, s){
    const self = this;
    window.scrollTo(0,s);
    if(self.state.pageName === pages) {
      self.setState({pageName: Pop()});
    } else {
      self.setState({pageName: pages});
    }
    // console.log(this.scrollTo, s)
  }

  renderPage(value, looks, locate, scroll) {
    if (looks === true) {
      return (
        <div id={this.state.pageName}  className={locate} onClick={() => this.handleClick(value.type.name, scroll)}>
          <div className="page-content-wrap"> {value} </div>
        </div>
      );
    } else {
      return (
        <div className={locate} onClick={() => this.handleClick(value.type.name, scroll)}>
          <div>{value.type.name}</div>
        </div>
      );
    }
  }

  render() {
    const locate = this.props.which ? "content-body " : "direct-menu popMenu";
    return (
      <div>
        {this.renderPage(this.props.value, this.props.which, locate, this.props.scroll)}
      </div>
    );
  }
}

class Page extends Component {
  renderContent(i, x, y) {
    return <PageClickComponent name={i.type.name} value={i} which={x} scroll={y}/>
  }

  render() {
    return (
      <div className={this.props.what}>
        {this.renderContent(<Route.About />, this.props.check, 0)}
        {this.renderContent(<Route.Demos />, this.props.check, 408)}
        {this.renderContent(<Route.Creative />, this.props.check, 811)}
        {this.renderContent(<Route.OtherSites />, this.props.check, 1222)}
      </div>
    );
  }
}

const Pages = {
  Page: Page,
  PageClickComponent: PageClickComponent,
}

export default Pages;
