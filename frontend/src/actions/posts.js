import { GET_ALL_POSTS, GET_POSTS_BY_CATEGORY, ADD_POST } from "./types";
import * as api from "../utils/api";

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

export const addPostAction = (post) => {
  return {
    type: ADD_POST,
    post,
  }
}

export const addPost = (postData) => (dispatch) => {
  return api.addPost(postData)
    .then(postData => dispatch(addPostAction(postData)))
}


