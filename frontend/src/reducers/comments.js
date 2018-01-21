import { GET_COMMENTS } from '../actions/types';


export default function comments(state = {}, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.comments,
      };
    default:
      return state;
  }
}
