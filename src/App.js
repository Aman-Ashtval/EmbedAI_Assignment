import { Switch, Route } from "react-router-dom";
import { Component } from "react";

import Home from "./components/Home";
import CreateCharacter from "./components/CreateCharacter";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/character" component={CreateCharacter} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;
