import React, { Component } from "react";
import EditPost from "./EditPost";
import AddComment from "./AddComment";
import { connect } from "react-redux";
import { getPost, deletePost } from "../actions/posts";
import { getComments } from "../actions/comments";
import Moment from "react-moment";
import Header from './Header';

class Post extends Component {
  state = {
    author: "",
    body: "",
    parentId: this.props.match.params.id
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
    this.props.getComments(id);
  }



  render() {
    const { post } = this.props;
    const { comments } = this.props.comments;

    return <div className="main-content">
        {post && post.title ? <div className="post-details">
            <div className="post-content">
              <EditPost id={post.id}/>
              <h2>{post.title}</h2>
              <p>written by {post.author}</p>
              <p>{post.body}</p>
              <div>Post Score: {post.voteScore}</div>
              <p>Last edit at: <Moment unix>{post.timestamp / 1000}</Moment></p>
              <h4>Number of comments: {post.commentCount}</h4>
            </div>
            {comments && comments.map(comment => {
                return <div className="post-comment" key={comment.id}>
                  <EditPost id={post.id}/>
                    <div><b>{comment.author}</b> says: </div>
                    <div>{comment.body}</div>
                    <div>Score: {comment.voteScore}</div>
                  </div>;
              })}
              <AddComment id={post.id}/>
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

export default connect(mapStateToProps, { getPost, getComments, deletePost })(Post);
