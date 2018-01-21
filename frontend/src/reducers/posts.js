import { GET_ALL_POSTS, ADD_POST } from "../actions/types";

export default function posts(state = {}, action) {

  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    case ADD_POST:
    console.log('action.post',action.post);
    
      return {
        ...state,
        posts: state.posts.push(action.post),
      };
    default:
      return state;
  }
}
