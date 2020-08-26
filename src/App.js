import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const DIAMETER = 12;

export default class App extends Component {
  state = {
    dots: [],
  };

  componentDidMount = () => {
    let y = Math.floor(window.innerHeight / (3 * DIAMETER)) + 2;
    let x = Math.floor(window.innerWidth / (3 * DIAMETER)) + 2;
    let dots = [];
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        let top = j * DIAMETER * 3 - 0.5 * DIAMETER;
        let left = i * DIAMETER * 3 - 0.5 * DIAMETER;
        let deltaX = left - window.innerWidth / 2;
        let deltaY = window.innerHeight / 2 - top;
        let theta = Math.atan(deltaY / deltaX);
        if (deltaX < 0 && deltaY > 0) {
          theta += Math.PI;
        } else if (deltaX < 0 && deltaY < 0) {
          theta += Math.PI;
        } else if (deltaX > 0 && deltaY < 0) {
          theta += 2 * Math.PI;
        }
        dots.push(
        
          <div
            className="dot"
            style={{
              top: `${top}px`,
              left: `${left}px`,
              animationDelay: `${3 * (2 * Math.PI - theta) / (2 * Math.PI)}s`,
            }}
          />
          //<div style={{color: "red", position: "absolute", fontSize: "8px", top: `${top}px`, left: `${left}px`}}>{theta.toFixed(3)}</div>
        );
      }
    }
    this.setState({ dots });
  };

  render() {
    console.log(this.state.dots);
    return (
      <div>
        <div>{this.state.dots}</div>
      </div>
    );
  }
}

//put the whole thing in the upper left corner, then transform it to be on the screen
