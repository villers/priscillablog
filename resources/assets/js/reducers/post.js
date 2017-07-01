import { handleActions } from 'redux-actions';
import { LOAD_POST, LOAD_POST_FAILURE, LOAD_POST_SUCCESS } from '../actions/post';

const INIT_STATE = {
  post: null,
  error: null,
  loading: false,
};

const post = handleActions({
  [LOAD_POST]: state => ({
    ...state,
    post: INIT_STATE.post,
    error: null,
    loading: true,
  }),
  [LOAD_POST_SUCCESS]: (state, action) => ({
    ...state,
    post: action.payload.data,
    error: null,
    loading: false,
  }),
  [LOAD_POST_FAILURE]: (state, action) => ({
    ...state,
    error: action.payload || { message: action.payload.message },
    loading: false,
  }),
}, INIT_STATE);

export default post;
