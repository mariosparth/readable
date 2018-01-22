import React, { Component } from 'react';
import { fetchAllPosts } from '../actions/posts';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'antd';
import AddPost from './AddPost';
import Moment from "react-moment";

class Posts extends Component {
  state = {
    posts: [],
    sort: false,
  };

  componentDidMount() {
    this.props.fetchAllPosts().then((data) => {
      this.setState({ posts: data.posts });
    });
  }

  order(type) {
    const { posts } = this.props.posts;
    const { sort } = this.state;

    if(type === 'voteScore'){
      return this.setState({
        posts: posts.sort((a, b) => {
          if(!sort) {
            return a.voteScore > b.voteScore;
          }else {
            return a.voteScore < b.voteScore;
          }
        }),
        sort: !sort
      });

    } else {

      return this.setState({
        posts: posts.sort((a, b) => {
          if(!sort) {
            return a.timestamp > b.timestamp;
          }else {
            return a.timestamp < b.timestamp;
          }
        }),
        sort: !sort
      });

    }
  }

  render() {
    const { posts } = this.state;
    const { category } = this.props;

    return <div className="main-content">
        <div className="control-buttons">
          <AddPost />

          <Button className="space" type="primary" onClick={() => this.order("timestamp")}>
            Sort by Time
          </Button>
          <Button className="space" type="primary" onClick={() => this.order("voteScore")}>
            Sort by Score
          </Button>
        </div>

        {category ? posts
              .filter(post => post.category === category)
              .map(post => (
                <div className="post" key={post.id}>
                  <Link to={`/${post.category}/${post.id}`} params={{id: post.id}}>
                    <h3>{post.title}</h3>
                  </Link>
                  <p>Created at: <Moment unix>{post.timestamp / 1000}</Moment></p>
                  <p>
                    <b>Body:</b> {post.body}
                  </p>
                  <p>
                    <b>Author:</b> {post.author}
                  </p>
                  <p>
                    <b>Category:</b> {post.category}
                  </p>
                  <p>
                    <b>Votes:</b> {post.voteScore}
                  </p>
                </div>
              )) : posts.map(post => <div className="post" key={post.id}>
                <Link to={`/${post.category}/${post.id}`} params={{id: post.id}}>
                  <h3 className="nav-text">{post.title}</h3>
                </Link>

                <p>Created at: <Moment unix>{post.timestamp / 1000}</Moment></p>

                <p>
                  <b>Body:</b> {post.body}
                </p>
                <p>
                  <b>Author:</b> {post.author}
                </p>
                <p>
                  <b>Category:</b> {post.category}
                </p>
                <p>
                  <b>Votes:</b> {post.voteScore}
                </p>
              </div>)}

        {}
      </div>;
  }
}

const mapStateToProps = (state) => ({
    posts: state.posts
  });

export default connect(mapStateToProps, { fetchAllPosts })(Posts);
