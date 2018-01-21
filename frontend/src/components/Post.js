import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getPost } from "../actions/posts";

class Post extends Component {
  state = {
      post: {}
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
  }

  render() {
    const { post } = this.props;
    console.log(post);
    
    return <div>test</div>;
  }
}

const mapStateToProps = state => {
  return {
    post: state.posts.thisPost
  };
};

export default connect(mapStateToProps, {getPost})(Post);
