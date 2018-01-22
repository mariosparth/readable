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
    active: false
  };

  componentDidMount() {
    this.props.fetchCategories().then(data => {
      this.setState({ categories: data.categories });
    });
  }

  render() {
    const { categories } = this.state;

    return (
      <div className="header">
        {/* <div>
          <Menu
            style={{ width: 256 }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode={this.state.mode}
            theme={this.state.theme}
          >
            <Menu.Item key="1">
              <Link to="/" className="nav-text">
                <Icon type="calendar" />All
              </Link>
            </Menu.Item>

            <Menu.Item key="2">
              <Icon type="calendar" />
              Navigation Two
            </Menu.Item>
          </Menu>
        </div> */}

        <span>
          <Link to="/" className="nav-text">
          <Button className="space" type="">
            <Icon type="home" />All
            </Button>
          </Link>
        </span>
        <span>
          {categories.map(category => (
            <Button key={category.name}>
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
