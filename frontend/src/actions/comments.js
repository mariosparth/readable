import {
  GET_COMMENTS,
  ADD_COMMENT,
  GET_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT
} from './types';

import * as api from '../utils/api';


export const getCommentsAction = comments => ({
  type: GET_COMMENTS,
  comments,
});


export const getComments = id => dispatch => api
  .getComments(id).then(comments => dispatch(getCommentsAction(comments)));

export const addCommentAction = comment => ({
  type: ADD_COMMENT,
  comment,
});

export const addComment = comment => dispatch => api
  .addComment(comment)
  .then(comment => dispatch(addCommentAction(comment)));

export const getCommentAction = (comment) => ({
  type: GET_COMMENT,
  comment
});

export const getComment = (id) => dispatch => api
  .getComment(id).then(comment => dispatch(editCommentAction(comment)))


export const editCommentAction = (comment) => ({
  type: EDIT_COMMENT,
  comment
});

export const editComment = (comment) => dispatch => api
  .editComment(comment).then(comment => dispatch(editCommentAction(comment)))



export const deleteCommentAction = (comment) => ({
  type: DELETE_COMMENT,
  comment
});

export const deleteComment = (comment) => dispatch => api
  .deleteComment(comment).then(comment => dispatch(deleteCommentAction(comment)))
