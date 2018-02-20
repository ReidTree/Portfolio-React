import React, { Component } from 'react';
import logo from '../imgs/TrierweilerCreates-white.png';
import Route from './route';

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
      <div id="hamburger" style={this.props.hamTop} className="hamburger" onClick={() => this.handleClick()}>
        <div className={popStyle}>
          {items}
        </div>
      </div>
    );
  }
}

class FoldMount extends Component {
  render() {
    return (
      <div className="foldContain">
        <header className="App-header" style={this.props.foldH}>
          <Hamburger hamTop={this.props.hamTop} />
          <div className="logo-container" style={this.props.foldH}>
            <img src={logo} className="App-logo" alt="logo" style={this.props.foldH} />
          </div>
        </header>
        <div style={this.props.foldInitH}> </div>
      </div>
    )
  }
}

class Fold extends Component {
  render() {
    var foldStateInit = this.props.foldSInit;
    var foldState = this.props.foldS;
    var foldMin = this.props.foldM;
    console.log(foldStateInit, foldState, foldMin)
    return (
      <FoldMount foldInitH={{"height": foldStateInit + "px"}} foldH={{"height": foldState + "px"}} hamTop={{"top": ((foldMin/2)-(26/2)) + "px"}} />
    );
  }
}

export default Fold;
