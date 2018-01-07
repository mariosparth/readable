import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from './Header'
import "../App.css";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <Switch>
          <Route exact path="/" render={() => <div>All posts</div>} />
          <Route exact path="/react" render={() => <div>React posts</div>} />
          <Route exact path="/redux" render={() => <div>Redux posts</div>} />
          <Route exact path="/udacity" render={() => <div>Udacity</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
