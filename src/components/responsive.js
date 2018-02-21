import React, { Component } from 'react';
import Rt from '../components/route';

class FoldSizing extends Component {
  render() {
     Res.ResCalc(this.props.sW, this.props.sH, this.props.sY);
    console.log(sizeExport.foldState)
    return (
      <Rt.Fold foldM={sizeExport.foldMin} foldS={sizeExport.foldState} foldSInit={sizeExport.foldStateInit}/>
    );
  }
}

class BarSizing extends Component {
  render() {
    return (
      <Rt.BarBetween widthThis={Res.sizeExport.sW}/>
    );
  }
}

const sizeExport = {
  foldState: "",
  foldStateInit: "",
  foldMin: "",
  sW: "",
  sH: "",
  scrollY: "",
}

function ResCalc(x,y,sY){
  sizeExport.scrollY = sY;
  sizeExport.foldStateInit = y / 2;
  sizeExport.sW = x;
  sizeExport.sH = y;

  var cScreen;
  if (x > 900 ){
    cScreen = "desktop";
    sizeExport.foldMin = 160;
  } else if (x <= 912 && x > 480) {
    cScreen = "tablet";
    sizeExport.foldMin = 100;
  } else if (x <= 480) {
    cScreen = "mobile";
    sizeExport.foldMin = 50;
    sizeExport.foldStateInit = 176;
  }
  Res.currentScreen = cScreen;

  sizeExport.foldState = sizeExport.foldStateInit - sY > sizeExport.foldMin ? sizeExport.foldStateInit - sY : sizeExport.foldMin;

  return sizeExport
}

const Res = {
  FoldSizing: FoldSizing,
  BarSizing: BarSizing,
  ResCalc: ResCalc,
  currentScreen: undefined,
  sizeExport: sizeExport,
}

export default Res;
