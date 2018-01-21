import { GET_COMMENTS } from './types';

import * as api from '../utils/api';


export const getCommentsAction = comments => ({
  type: GET_COMMENTS,
  comments,
});


export const getComments = id => dispatch =>
  api.getComments(id).then(comments => dispatch(getCommentsAction(comments)));
