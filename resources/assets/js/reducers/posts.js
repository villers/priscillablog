import { handleActions } from 'redux-actions';
import { LOAD_POSTS, LOAD_POSTS_FAILURE, LOAD_POSTS_SUCCESS } from '../actions/posts';


const INIT_STATE = {
  posts: {
    current_page: 1,
    data: [],
  },
  error: null,
  loading: false,
};

const posts = handleActions({
  [LOAD_POSTS]: state => ({
    ...state,
    posts: INIT_STATE.posts,
    error: null,
    loading: true,
  }),
  [LOAD_POSTS_SUCCESS]: (state, action) => ({
    ...state,
    posts: action.payload.data,
    error: null,
    loading: false,
  }),
  [LOAD_POSTS_FAILURE]: (state, action) => ({
    ...state,
    error: action.payload || { message: action.payload.message },
    loading: false,
  }),
}, INIT_STATE);

export default posts;
