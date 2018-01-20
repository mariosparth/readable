import { combineReducers } from 'redux';
import categories from './categories';
import posts from './posts';

export const reducer = combineReducers({
  categories,
  posts,
});
