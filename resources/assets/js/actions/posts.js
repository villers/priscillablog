import { createAction } from 'redux-actions';

export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const loadPosts = createAction(LOAD_POSTS, () => ({
  request: {
    url: '/posts',
  },
}));

