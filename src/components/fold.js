import React, { Component } from 'react';
import logo from '../imgs/TrierweilerCreates-white.png';
import logoNrm from '../imgs/TrierweilerCreates-nrm-OngBlk.png';
import Rt from './route';
import {BrowserRouter as Router, Link} from "react-router-dom";
import './fold.css';
import linkedIn from '../imgs/linkedIn-logo.png';
import gitOctopus from '../imgs/git.png';

class MenuItem extends Component {
  render() {
    const gists = Rt.gists;
    return (
      <div className="direct-menu">

        {gists ? (gists.map(gist => (
          <div key={gist.id}>
            <Link style={{"textDecoration": "none"}} to={gist.url}>
              <div className="popMenu" >
                {gist.description || '[no description]'}
              </div>
            </Link>
          </div>
          ))
        ) : (
          <div> Loading... </div>
        )}
      </div>
    );
  }
}

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
    };
  }

  handleClick(){
    this.setState({
      menuActive: !this.state.menuActive,
    });
  }

  render() {
    const items = this.state.menuActive ? <MenuItem /> : <div></div>;
    const popStyle = this.state.menuActive ? "popStyle" : null;
    const ham = this.props.hamStyle;
    return (
      <div id={ham} style={this.props.hamTop} className={ham + " " + this.props.hovChange} onClick={() => this.handleClick()}>
        <div className={popStyle}>
        <div className="close">X</div>
          {items}
          <div className="social-logos">
            <a href="https://www.linkedin.com/in/reid-trier"> <img className="linkedInPop" src={linkedIn} alt="LinkedIn"/></a>
            <a href="https://github.com/ReidTree"> <img className="linkedInPop" src={gitOctopus} alt="github"/></a>
          </div>
        </div>
      </div>
    );
  }
}

class FoldMount extends Component {
  constructor(props){
    super(props)
    this.state = {
      back: "backInit",
      img: logo,
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseLeave(event){
    this.newState(event);
  }

  handleMouseEnter(event){
    this.newState(event);
  }

  newState(x){
    if (x.type === "mouseenter"){
      this.setState({back: "backActive", img: logoNrm})
    } else {
      this.setState({back: "backInit", img: logo})
    }
  }

  render() {
    var ps = this.props;
    var foldHeight = ps.foldMin;
    var foldInit = ps.foldMin;
    var styleLogo = "preLogo";
    var theLogo = this.state.img;
    var hamburger = "hamburger-white";
    if (window.location.pathname === "/") {
      foldHeight = ps.foldH;
      foldInit = ps.foldInitH;
    }
    if (foldHeight.height === ps.foldMin.height) {
      styleLogo = "postLogo";
      theLogo = logoNrm;
      hamburger = "hamburger";
    }
    return (
      <div className="foldContain">
        <header className={"App-header " + this.state.back + " " + styleLogo} style={foldHeight}>
        <div className="leather"> </div>
          <Hamburger hamStyle={hamburger} hovChange={this.state.back} hamTop={ps.hamTop} />
          <div className="logo-container" style={foldHeight}>
            <Link to="/">
              <img onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseEnter} src={theLogo} className={"App-logo " + this.state.back} alt="logo" style={foldHeight} />
            </Link>
          </div>
        </header>
        <div style={foldInit}> </div>
      </div>
    )
  }
}

class Fold extends Component {
  render() {
    var foldStateInit = this.props.foldSInit;
    var foldState = this.props.foldS;
    var foldMin = this.props.foldM;
    return (
      <FoldMount
        foldInitH={{"height": foldStateInit + "px"}}
        foldH={{"height": foldState + "px"}}
        hamTop={{"top": ((foldMin/2)-(26/2)) + "px"}}
        foldMin={{"height": foldMin + "px"}}/>
    );
  }
}

export default Fold;
