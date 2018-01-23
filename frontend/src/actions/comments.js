import { GET_COMMENTS, ADD_COMMENT } from './types';

import * as api from '../utils/api';


export const getCommentsAction = comments => ({
  type: GET_COMMENTS,
  comments,
});


export const getComments = id => dispatch =>
  api.getComments(id).then(comments => dispatch(getCommentsAction(comments)));

export const addCommentAction = comment => ({
  type: ADD_COMMENT,
  comment,
});

export const addComment = comment => dispatch => api
  .addComment(comment)
  .then(comment => dispatch(addCommentAction(comment)));
