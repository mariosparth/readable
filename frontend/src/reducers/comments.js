import { GET_COMMENTS, ADD_COMMENT } from '../actions/types';


export default function comments(state = {}, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.comments,
      };
    case ADD_COMMENT:
      return {
        ...state,
        comment: state.comments.concat(action.comment),
      };
    default:
      return state;
  }
}
