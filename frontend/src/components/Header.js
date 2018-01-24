import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCategories } from "../actions/categories";

import { Icon, Button } from "antd";

class Header extends Component {
  state = {
    categories: [],
    mode: "inline",
    theme: "light",
    active: 'all'
  };

  componentDidMount() {
    this.props.fetchCategories().then(data => {
      this.setState({ categories: data.categories });
    });
  }

  someFunct(category) {
    if(category){
      this.setState({
        active: category.name
      });
    } else {
      this.setState({
        active: 'all'
      });
    }
  }

  render() {
    const { categories } = this.state;

    return (
      <div className="header-categories">
        <span>
          <Link to="/" className="nav-text">
          <Button onClick={() => this.someFunct()} className={this.state.active ===  'all' ? 'active' : ''} type="">
            <Icon type="home" />All
            </Button>
          </Link>
        </span>
        <span>
          {categories.map(category => (
            <Button key={category.name} onClick={() => this.someFunct(category)} className={this.state.active ===  category.name ? 'active' : ''}>
              <Link to={`/${category.path}`}>{category.name}</Link>
            </Button>
          ))}
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps, { fetchCategories })(Header);
