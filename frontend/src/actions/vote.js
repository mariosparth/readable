import {
  VOTE
} from './types';
import * as api from '../utils/api';

export const voteAction = (id, score) => {
  return {
    type: VOTE,
    id,
    score,
  }
}

export const voteDispatch = (id, option, type) => (dispatch) => {
  return api.vote(id, option, type)
    .then( data => dispatch(voteAction(id, data.voteScore)) )
}
