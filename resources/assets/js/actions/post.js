import { createAction } from 'redux-actions';

export const LOAD_POST = 'LOAD_POST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const loadPost = createAction(LOAD_POST, slug => ({
  request: {
    url: `/posts/${slug}`,
  },
}));

