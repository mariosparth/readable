import React, { Component } from "react";
import Header from "./Header";
import Posts from "./Posts";
import "../App.css";

class Main extends Component {
  render() {

  const category = this.props.location.pathname.slice(1);

    return (
      <div className="App">
        <Header />
        <Posts category={category} />
      </div>
    );
  }
}

export default Main;
