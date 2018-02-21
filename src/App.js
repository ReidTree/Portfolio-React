import React, { Component } from 'react';
import './App.css';
import Rt from './components/route';
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
    const sY = window.scrollY;
    Rt.Res.ResCalc(sW,sH,sY)
    const sizeExport = Rt.Res.sizeExport;

    return (
      <div>
        <Rt.Res.FoldSizing sW={sW} sH={sH} sY={sY}/>
        <Rt.About />
        <Rt.Res.BarSizing sizeExport={sizeExport}/>
        <Rt.Sites sW={sW} sH={sH}/>
        <Rt.Res.BarSizing sizeExport={sizeExport}/>
        <Rt.Creative />
        <Rt.Res.BarSizing sizeExport={sizeExport}/>
        <Rt.Contact />
        <div className="copy-right">
          © REID TRIERWEILER 2018
        </div>
      </div>
    );
  }
}

export default App;
