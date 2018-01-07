import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Posts from "./Posts";
import "../App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Posts}/>
          <Route exact path='/:category/' render={()=>( <div>React</div> )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
