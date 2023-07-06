import React, { Component } from "react";
import { choice } from "./helpers";
// import Coin from "./Coin";

export default class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: "",
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    };
  }
  flipCoin = () => {
    const currImg = choice(this.props.coins);
    this.setState(st => {
      let newState = {
        ...st,
        currCoin: currImg,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (currImg.side === "heads" ? 1 : 0),
        nTails: st.nTails + (currImg.side === "tails" ? 1 : 0)
      };

      return newState;
    });
  };

  handleClick = () => {
    this.flipCoin();
  };

  render() {
    return (
      <div className="CoinContainer">
        {/* {this.state.currCoin && <Coin data={this.state.currCoin} />} */}
        <img src={this.state.currCoin.imgSrc} height={200} alt="" />
        <h2>Let's flip a coin</h2>
        <button onClick={this.handleClick}>Flip me!</button>
        <p>
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{" "}
          and {this.state.nTails} tails
        </p>
      </div>
    );
  }
}
