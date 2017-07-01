import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import post from './post';
import posts from './posts';

const reducer = combineReducers({
  form,
  post,
  posts,
});

export default reducer;
