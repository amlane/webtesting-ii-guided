import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    greeting: "Hello World"
  };
  greetTeam = () => {
    this.setState({
      greeting: "Hello Developers"
    });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.greeting}</h1>
        <button onClick={this.greetTeam}>Greet</button>
      </div>
    );
  }
}

export default App;
