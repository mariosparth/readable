import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getPost } from "../actions/posts";
import { getComments } from "../actions/comments";

class Post extends Component {
  state = {
      post: {},
      comments: {}
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
    this.props.getComments(id);
  }

  render() {
    const { post } = this.props;
    const { comments } = this.props; 
    console.log(post);
    console.log(comments);
    
    return <div>test</div>;
  }
}

const mapStateToProps = state => {
  return {
    post: state.posts.thisPost,
    comments: state.comments
  };
};

export default connect(mapStateToProps, {getPost, getComments})(Post);
