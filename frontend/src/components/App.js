import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./Main";
import Post from "./Post"
import "../App.css";

class App extends Component {
  render() {
    return <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/:category/" component={Main} />
          <Route exact path="/:category/:id" component={Post} />
        </Switch>
      </div>;
  }
}

export default App;
