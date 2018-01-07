import { GET_ALL_POSTS } from "../actions/types";

export default function posts(state = {}, action) {
 // const { posts } = action;
  console.log('action');
  

  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: action.posts
      }
     default:
      return state;
  }
};


