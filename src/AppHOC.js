import React, { Component } from "react";
import WithClass from "./hoc/WithClass";

class AppHOC extends Component {
  // higher order function

  add = (x, y) => {
    console.log("x:", x);
    console.log("y:", y);
    console.log(x + y);
  };
  addFive = (x, callback) => {
    return callback(x, 5);
  };
  addTen = (x, callback) => {
    return callback(x, 10);
  };

  Adder = (x, callback) => {
    return (y) => {
      return callback(x, y);
    };
  };
  AdderFive = this.Adder(5, this.add);
  AdderTen = this.Adder(10, this.add);
  render() {
    return (
      <>
        <h1>React - HOC (Higher Order Component)</h1>
        <span>This course is by Meta</span>
        <button onClick={() => this.add(3, 5)}>add</button>
        <button onClick={() => this.addFive(10, this.add)}>add 5</button>
        <button onClick={() => this.addTen(15, this.add)}>add 10</button>

        <button onClick={() => this.AdderFive(2)}>add with 10</button>
        <button onClick={() => this.AdderTen(5)}>add with 10</button>
      </>
    );
  }
}
export default WithClass(AppHOC, "App");
