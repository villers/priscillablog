import { LOAD_POSTS, LOAD_POSTS_FAILURE, LOAD_POSTS_SUCCESS } from '../actions/posts';

const INIT_STATE = {
  posts: {},
  error: null,
  loading: false,
};

const posts = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: {},
        error: null,
        loading: true,
      };
    case LOAD_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload.data,
        error: null,
        loading: false,
      };
    case LOAD_POSTS_FAILURE: {
      const error = action.payload || { message: action.payload.message };
      return {
        ...state,
        error,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default posts;
