import React, { Component } from 'react';
import Route from '../components/route';

class FoldSizing extends Component {
  render() {
    const sizeExport = this.props.sizeExport;

    return (
      <Route.Fold foldM={sizeExport.foldMin} foldS={sizeExport.foldState} foldSInit={sizeExport.foldStateInit}/>
    );
  }
}

class BarSizing extends Component {
  render() {
    const sizeExport = this.props.sizeExport;

    return (
      <Route.BarBetween widthThis={sizeExport.sW}/>
    );
  }
}

const Responsive = {
  FoldSizing: FoldSizing,
  BarSizing: BarSizing,
}

export default Responsive;
