import React, { Component } from 'react';
import './App.css';
import Rt from './components/route';
import bar from './imgs/bar.png';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoStart: "start",
      screenHeight: window.innerHeight,
      screenWidth: window.innerWidth,
      screenFold: "hello",
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
    const gists = Rt.gists;
    const sW = this.state.screenWidth;
    const sH = this.state.screenHeight;
    const sY = window.scrollY;
    Rt.Res.ResCalc(sW,sH,sY)
    return (
      <Router>
        <div>
          <Rt.Res.FoldSizing sW={sW} sH={sH} sY={sY}/>
          <div>
            <Switch>
              <Route path="/" exact component={Rt.Home} />
              <Route path="/:gistId" component={Gist} />
            </Switch>
          </div>

          <div className="copy-right">
            © REID TRIERWEILER 2018
          </div>
        </div>
      </Router>
    );
  }
}


const Gist = ({ match }) => (
    <div>
      <Rt.FindPage page={match.params.gistId} />
    </div>
  );

export default App;

// {gists ? (gists.map(gist => (
//   <div key={gist.id}>
//     <Link to={'/' + gist.id}>
//       {gist.description || '[no description]'}
//     </Link>
//   </div>
//   ))
// ) : (
//   <div> Loading... </div>
// )}

// <Rt.HomeAbout />
// <Rt.StarBar sizeExport={sizeExport}/>
// <Rt.HomeSites sW={sW} sH={sH}/>
// <Rt.StarBar sizeExport={sizeExport}/>
// <Rt.HomeDesign />
// <Rt.HomeContact />
