import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import posts from './posts';

const reducer = combineReducers({
  form,
  posts,
});

export default reducer;
