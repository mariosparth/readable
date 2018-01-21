import {
  GET_ALL_POSTS,
  GET_POSTS_BY_CATEGORY,
  ADD_POST,
  GET_POST,
} from './types';

import * as api from '../utils/api';

export const getAllPosts = posts => ({
  type: GET_ALL_POSTS,
  posts,
});

export const getPostsByCategory = (posts, category) => ({
  type: GET_POSTS_BY_CATEGORY,
  posts,
  category,
});

export const fetchAllPosts = () => dispatch =>
  api.getAllPosts().then(posts => dispatch(getAllPosts(posts)));

export const addPostAction = post => ({
  type: ADD_POST,
  post,
});

export const addPost = postData => dispatch => api.addPost(postData)
  .then(postData => dispatch(addPostAction(postData)));

export const getPostAction = post => ({
  type: GET_POST,
  post,
});

export const getPost = id => dispatch => api.getPost(id)
  .then(post => dispatch(getPostAction(post)));
