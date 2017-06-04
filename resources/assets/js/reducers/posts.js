import {
    LOAD_POSTS,
    LOAD_POSTS_SUCCESS,
    LOAD_POSTS_FAILURE,
} from '../actions/posts';

const INIT_STATE = {
    posts: [],
    error: null,
    loading: false
};

const posts = (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                posts: [],
                error: null,
                loading: true
            };
        case LOAD_POSTS_SUCCESS: {
            return {
                ...state,
                posts: action.payload.data,
                error: null,
                loading: false
            };
        }
        case LOAD_POSTS_FAILURE:
            const error = action.payload || { message: action.payload.message };//2nd one is network or server down errors
            return {
                ...state,
                error: error,
                loading: false
            };
        default:
            return state;
    }
};

export default posts;
