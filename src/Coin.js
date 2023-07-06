import React, { Component } from "react";

export default class Coin extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.data.imgSrc}
          side={this.props.data.side}
          alt={this.props.data.side}
          width={200}
        />
      </div>
    );
  }
}
