import React, { Component } from "react";
import EditPost from "./EditPost";
import EditComment from "./EditComment";
import AddComment from "./AddComment";
import { connect } from "react-redux";
import { getPost, deletePost } from "../actions/posts";
import { getComments } from "../actions/comments";
import Moment from "react-moment";
import Header from './Header';
import Vote from './Vote';
import { Link } from 'react-router-dom';
import { Icon, Button } from 'antd';
import NotFound from './NotFound';

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
    let numOfComments = 0;
    if(comments){
      numOfComments = comments.length;
    }

    return <div className="main-content">
    <div className="header">
      <span>
        <Link to="/" className="nav-text">
        <Button>
          <Icon type="left-circle" />Back
          </Button>
        </Link>
      </span>
    </div>
        {post && post.title ? <div className="post-details">
            <div className="post-content">
              <EditPost id={post.id}/>
              <h2>{post.title}</h2>
              <p>written by {post.author}</p>
              <p>{post.body}</p>
              <div>Post Score:</div>
              <Vote value={post} />
              <p>Last edit at: <Moment unix>{post.timestamp / 1000}</Moment></p>
              <h4>Number of comments: {numOfComments}</h4>
            </div>
            {comments && comments.map(comment => {
                return <div className="post-comment" key={comment.id}>
                  <EditComment commentId={comment.id} commentBody={comment.body} commentAuthor={comment.author} parentId={post.parentId}/>
                    <div><b>{comment.author}</b> says: </div>
                    <div>{comment.body}</div>
                    <div><Vote value={comment} /></div>
                  </div>;
              })}
              <AddComment id={post.id}/>
          </div> : 
          <div> 
            <NotFound />  
          </div>}
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
