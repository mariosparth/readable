import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCategories } from "../actions/categories";

class Header extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    this.props.fetchCategories().then(data => {
      this.setState({ categories: data.categories });
    });
  }

  render() {
    return (
      <ul>
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/react">React</Link>
        </li>
        <li>
          <Link to="/redux">Redux</Link>
        </li>
        <li>
          <Link to="/udacity">Udacity</Link>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = state => {
    console.log(state);
    
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps, { fetchCategories })(Header);
