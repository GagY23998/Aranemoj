import React, { Component } from "react";

class Informatia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: this.props.info
    };
  }
  getInfoMan = event => {};
  render() {
    return (
      <div>
        <p>{this.state.info}</p>
      </div>
    );
  }
}

export default Informatia;
