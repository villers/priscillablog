export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const loadPosts = () => ({
    type: LOAD_POSTS,
    payload: {
        request: {
            url: `/posts`,
        },
    },
});
