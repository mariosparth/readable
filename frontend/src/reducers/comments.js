import {
  GET_COMMENTS,
  ADD_COMMENT,
  GET_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
} from '../actions/types';


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
        comments: state.comments.concat(action.comment),
      };
    case GET_COMMENT:
      return {
        ...state,
        comment: state.comment,
      };

    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(c => c.id !== action.comment.id)
      }

    case EDIT_COMMENT:
      return {
        ...state,
        comment: action.comment
      }
    default:
      return state;
  }
}
