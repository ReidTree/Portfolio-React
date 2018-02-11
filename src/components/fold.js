import React, { Component } from 'react';
import logo from '../logo.svg';
import Route from './route';

class MenuItem extends Component {
  render() {
    if (this.props.show){
      return (
        <Route.Pages.Page what="menu-pop" check={undefined}/>
      );
    } else {
      return <div></div>
    }
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
    const items = this.state.menuActive;
    const popStyle = this.state.menuActive ? "popStyle" : null;
    return (
      <div id="hamburger" className="hamburger" onClick={() => this.handleClick()}>
        <div className={popStyle}>
          <MenuItem show={items} />
        </div>
      </div>
    );
  }
}

class Fold extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hamburger />
      </header>
    );
  }
}

export default Fold;
