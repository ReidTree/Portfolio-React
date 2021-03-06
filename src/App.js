import React, { Component } from 'react';
import './App.css';
import Rt from './components/route';
import {BrowserRouter as Router, Route,  Link, Switch, Redirect} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoStart: "start",
      screenHeight: window.innerHeight,
      screenWidth: window.innerWidth,
      screenFold: "hello",
      fadeIn: "fadeStart",
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleSize = this.handleSize.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 500);
    window.addEventListener("resize", this.handleSize);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnMount() {
    window.addEventListener("resize", this.handleSize);
    window.addEventListener("scroll", this.handleScroll);
    clearTimeout(this.timer);
  }
  handleSize(e) {
    var screenH = window.innerHeight;
    var screenW = window.innerWidth;
    this.setState((prevState) => ({
      screenHeight: screenH,
      screenWidth: screenW,
    }));
  }

  tick() {
    this.setState((prevState) => ({fadeIn: "fadeIn"}))
  }

  handleScroll(e){
    var changeLogo = this.state.logoStart === "start" ? "startMove" : "start";
    this.setState((prevState) => ({ logoStart: changeLogo, }));
  }

  render() {
    // const gists = Rt.gists;
    const sW = this.state.screenWidth;
    const sH = this.state.screenHeight;
    const sY = window.scrollY;
    const gists = Rt.gists;
    Rt.Res.ResCalc(sW,sH,sY)
    return (
      <div className={this.state.fadeIn + ' transition-03'}>
        <Rt.Res.FoldSizing sW={sW} sH={sH} sY={sY}/>
        <div>
          <Switch>
            <Route exact path="/" component={Rt.Home} />
            <Route path="/about" component={Rt.AboutPage} />
            <Route path="/sites" component={Rt.Demos} />
            <Route component={NoMatch} />
          </Switch>
        </div>

        <div className="footer">
          <div className="footerRouting">

          {gists.map(gist => (
            <div key={gist.id} className="footerRouteOut">
              <Link style={{"textDecoration": "none"}} to={gist.url}>
                <div className="footerRouteIn helv w-700" >
                  {gist.title.toUpperCase() || '[no description]'}
                </div>
              </Link>
            </div>
            ))}
            <div className="leather"> </div>

          </div>
          <div className="copy-right helv w-100">
            <div className="leather"> </div>
            <div className="copyRightText">
              © REID TRIERWEILER 2018
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const NoMatch = () => (
    <div className="oops">
      <h2 className="oops-head">Oops!!</h2>
        <p className="sans">Looks like something went wrong!</p>
      <Link to="/"><p>SEND ME HOME</p></Link>
    </div>
  );

export default App;
