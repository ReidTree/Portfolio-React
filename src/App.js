import React, { Component } from 'react';
import './App.css';
import Route from './components/route';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route.Fold />
        <Route.Pages.Page what='home-wrap' check={true} />
        <div className="copy-right">
          © REID TRIERWEILER 2018
        </div>
      </div>
    );
  }
}

export default App;
