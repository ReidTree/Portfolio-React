import React, { Component } from 'react';
import logo from '../imgs/TrierweilerCreates-white.png';
import logoNrm from '../imgs/TrierweilerCreates-nrm-OngBlk.png';
import Rt from './route';

class MenuItem extends Component {
  render() {
    return <div></div>
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
    return (
      <div id="hamburger" style={this.props.hamTop} className={"hamburger " + this.props.hovChange} onClick={() => this.handleClick()}>
        <div className={popStyle}>
          {items}
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
    return (
      <div className="foldContain">
        <header className={"App-header " + this.state.back} style={ps.foldH}>
          <Hamburger hovChange={this.state.back} hamTop={ps.hamTop} />
          <div className="logo-container" style={ps.foldH}>
            <img  onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseEnter} src={this.state.img} className={"App-logo " + this.state.back} alt="logo" style={ps.foldH} />
          </div>
        </header>
        <div style={ps.foldInitH}> </div>
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
        hamTop={{"top": ((foldMin/2)-(26/2)) + "px"}} />
    );
  }
}

export default Fold;
