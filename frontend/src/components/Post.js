import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getPost } from "../actions/posts";
import { getComments } from "../actions/comments";
import Moment from "react-moment";

class Post extends Component {
  state = {
    author: "",
    body: "",
    parentId: this.props.match.params.id
  };

  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
    this.props.getComments(id);
  }


  
  render() {
    const { post } = this.props;
    const { comments } = this.props.comments;
    console.log(post);
    console.log(comments);

    return <div className="main-content">
        {post && post.title ? <div className="post-details">
            <div className="post-content">
              <h2>{post.title}</h2>
              <p>written by {post.author}</p>
              <p>{post.body}</p>
              <div>Post Score: {post.voteScore}</div>
              <h4>Number of comments: {post.commentCount}</h4>
              <Moment unix>{post.timestamp}</Moment>
            </div>
            {comments && comments.map(comment => {
                return <div className="post-comment" key={comment.id}>
                    <p>{comment.author} wrote:</p>
                    <div>{comment.body}</div>
                    <div>Comment Score: {comment.voteScore}</div>
                  </div>;
              })}
          </div> : <div> This post doesn't exist.</div>}
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    post: state.posts.thisPost,
    comments: state.comments
  };
};

export default connect(mapStateToProps, { getPost, getComments })(Post);