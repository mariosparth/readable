import {
  VOTE
} from '../actions/types';

export default function vote(state = {}, action) {
  switch(action.type) {
    case VOTE:
      return {
        ...state,
        [action.id]: action.score
      }

    default:
      return state
  }
}
