import React, { Component } from "react";
import { fetchAllPosts } from "../actions/posts";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.props.fetchAllPosts().then(data => {
      this.setState({ posts: data.posts });
    });
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="main-content">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <h3>{post.title}</h3>
            <p><b>Time:</b> {post.timestamp}</p>
            <p><b>Body:</b> {post.body}</p>
            <p><b>Author:</b>  {post.author}</p>
            <p><b>Category:</b> {post.category}</p>
            <p><b>Votes:</b> {post.voteScore}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { fetchAllPosts })(Posts);
