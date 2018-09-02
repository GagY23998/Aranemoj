import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Informatia from "./something.jsx";
import PropTypes from "";
class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {
    information: [
      "This is some shit",
      "antoher shit",
      "For all my party people,this is shit",
      "Hello, we meet again, shit"
    ],
    tempVar: ""
  };
  naPromjenu = e => {
    this.setState({ tempVar: e.target.value });
    console.log(this.myRef);
  };

  uradiPromjenu = event => {
    let array = this.state.information.slice();

    array.push(this.state.tempVar);
    this.setState({
      information: array
    });
    console.log(this.state.information.length);
  };

  render() {
    return (
      <div>
        <br />
        <textarea onChange={this.naPromjenu} />
        <button onClick={this.uradiPromjenu}>Susaj</button>
        <div />
        {this.state.information.map((e, i) => (
          <Informatia key={i} info={e} />
        ))}
      </div>
    );
  }
}

App.propTypes = {
  information: (prop, propName) => {
    return prop.length == 8 ? new Error("znas buraz, ne moze to tako") : null;
  }
};

export default App;
