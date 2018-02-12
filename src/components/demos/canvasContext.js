import React, {Component} from "react";
import Route from '../route';
import {Konva, Layer, Rect, Stage, Group} from 'react-konva';
import windowHand from '../window-listen';

function rect(props) {
    const {ctx, x, y, width, height} = props;
    ctx.fillRect(x, y, width, height);
}

function randomColor(){
  const colors = ["blue","green","red","darkorange","grey"];
  let clr;
  clr = colors[Math.floor(Math.random() * Math.floor(5))];
  return clr;
}

class MyRect extends Component {
    constructor(...args) {
      super(...args);
      this.state = {
        color: 'salmon',
        container: window.innerWidth,
      };
      this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove(event){
      const mouseX = event.evt.clientX;
      const mouseY = event.evt.clientY;
      this.stateHandler();
    }

    stateHandler(){
      this.setState({color: randomColor()})
    }

    render() {
      const cW = this.props.containObj.containerW;
      const cH = this.props.containObj.containerH;
        return (
          <Rect
            x={0} y={0} width={cW} height={cH}
            fill={this.state.color}
            shadowBlur={10}
            onMouseMove={this.handleMouseMove}
          />
        );
    }
}

class Canvas extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      containerW: window.innerWidth,
      containerH: window.innerHeight,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    const contain = windowHand();
    this.setState({containerW: contain.winWidth,
    containerH: contain.winHeight});
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const x = {containerW: this.state.containerW, containerH: this.state.containerH};
    return (
      <Stage width={x.containerW} height={400} position='absolute'>
        <Layer>
          <MyRect containObj={x}/>
        </Layer>
      </Stage>
    );
  }
}


export default Canvas;
