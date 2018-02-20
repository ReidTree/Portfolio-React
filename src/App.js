import React, { Component } from 'react';
import './App.css';
import Route from './components/route';
import bar from './imgs/bar.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoStart: "start",
      screenHeight: window.innerHeight,
      screenWidth: window.innerWidth,
      screenFold: "hello"
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleScroll);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnMount() {
    window.addEventListener("resize", this.handleScroll);
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll(e){
    var changeLogo = this.state.logoStart === "start" ? "startMove" : "start";
    var screenH = window.innerHeight;
    var screenW = window.innerWidth;
    this.setState(prevState => ({
      logoStart: changeLogo,
      screenHeight: screenH,
      screenWidth: screenW,
    }));
  }

  render() {
    const sW = this.state.screenWidth;
    const sH = this.state.screenHeight;
    const scrollY = window.scrollY;
    var foldStateInit = sH / 2;
    var foldState, foldMin;
    if ( sW > 900 ){
      foldMin = 160;
    } else if (sW <= 900 && sW > 490) {
      foldMin = 100;
    } else if (sW <= 490) {
      foldMin = 50;
      foldStateInit = 176;
    }
    foldState = foldStateInit - scrollY > foldMin ? foldStateInit - scrollY : foldMin;
    const sizeExport = {
      foldState: foldState,
      foldStateInit: foldStateInit,
      foldMin: foldMin,
      sW: sW,
      sH: sH,
      scrollY: scrollY,
    }

    return (
      <div screen={this.state.screenHeight}>
        <Route.Responsive.FoldSizing sizeExport={sizeExport}/>
        <Route.About />
        <Route.Responsive.BarSizing sizeExport={sizeExport}/>
        <Route.Sites sW={sW} sH={sH}/>
        <Route.Responsive.BarSizing sizeExport={sizeExport}/>
        <Route.Demos />
        <Route.Responsive.BarSizing sizeExport={sizeExport}/>
        <Route.Creative />
        <Route.Responsive.BarSizing sizeExport={sizeExport}/>
        <Route.Contact />
        <div className="copy-right">
          © REID TRIERWEILER 2018
        </div>
      </div>
    );
    // <Route.Fold foldM={foldMin} foldS={foldState} foldSInit={foldStateInit}/>

    // <div id="topBar" className={"barStyleInit " + barStyle} style={{"top": foldStateInit + "px", "left": barState}}>
    //   <img src={bar} className="barTop" />
    // </div>
    // <div id="bottomBar" className={"barStyleInit " + barStyle} style={{"top": bottomBar + "px", "left": barState}}>
    //   <img src={bar} className="barBottom" />
    // </div>
    // <Route.Pages.Page what='home-wrap' check={true} />
  }
}

export default App;
