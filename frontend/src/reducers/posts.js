import { GET_ALL_POSTS, ADD_POST, GET_POST } from "../actions/types";

export default function posts(state = {}, action) {

  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.push(action.post),
      };
    case GET_POST:
      return {
        ...state,
        thisPost: action.post,
      };
    default:
      return state;
  }
}
