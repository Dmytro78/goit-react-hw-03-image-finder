import React, { Component } from "react";
import Loader from "react-loader-spinner";


export default class Loader extends Component {
  
  render() {
    return (
      <Loader
        type="Bars"
        color="#00BFFF"
        height={80}
        width={80}
      />
    );
  }
}