import React, { Component } from "react";
import Carousel from "./Carousel";
import Cinema from "./Cinema";
import ListMovie from "./ListMovie";
export default class HomePage extends Component {
  render() {
    return <div>
      <Carousel />
      <ListMovie/>
      <Cinema/>
    </div>;
  }
}
