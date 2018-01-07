import React, { Component } from "react";
import { fetchAllPosts } from "../actions/posts";
import { connect } from "react-redux";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.props.fetchAllPosts().then(data => {
      console.log(data);
      
      this.setState({ posts: data.posts });
    });
    
    
  }

  render() {
    return <div>test</div>;
  }
}

const mapStateToProps = state => {
  console.log("test");
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { fetchAllPosts })(Posts);
