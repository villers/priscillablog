import { LOAD_POST, LOAD_POST_FAILURE, LOAD_POST_SUCCESS } from '../actions/post';

const INIT_STATE = {
  post: null,
  error: null,
  loading: false,
};

const posts = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOAD_POST:
      return {
        ...state,
        post: INIT_STATE.post,
        error: null,
        loading: true,
      };
    case LOAD_POST_SUCCESS:
      return {
        ...state,
        post: action.payload.data,
        error: null,
        loading: false,
      };
    case LOAD_POST_FAILURE: {
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
