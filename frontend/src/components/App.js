import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./Main";
import "../App.css";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path='/:category/' component={Main}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;
