import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts } from '../actions/posts';
import { voteDispatch } from '../actions/vote';
import { Button, Icon } from 'antd';
import Divider from 'antd/lib/divider';

class Vote extends Component {
  vote(id, option, type) {
    this.props.voteDispatch(id, option, type);
    this.props.fetchAllPosts();
  }

  render() {

    const { value, vote } = this.props; // value : post or comment
    const score = vote[value.id] === undefined ? value.voteScore : vote[value.id];

    let type;
    if (value.hasOwnProperty('parentId')) {
      type = 'comment';
    } else {
      type = 'post';
    }

    return (
      <div>
         <p>{score}</p>
        <Button
          icon="like"
          onClick={() => this.vote(value.id, 'upVote', type)}
        />{' '}
        <Button
          icon="dislike"
          onClick={() => this.vote(value.id, 'downVote', type)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  vote: state.vote,
  posts: state.posts,
});

export default connect(mapStateToProps, { voteDispatch, fetchAllPosts })(Vote);
