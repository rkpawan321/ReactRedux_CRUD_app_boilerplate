import blogs from '../services/blogs';
import history from '../history';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_BLOG,
    FETCH_BLOG,
    FETCH_BLOGS,
    DELETE_BLOG,
    EDIT_BLOG,
} from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createBlog = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await blogs.post('/blogs', { ...formValues, userId });
    dispatch({ type: CREATE_BLOG, payload: response.data });
    history.push('/');// PROGRAMMATIC NAVIGATION 
};

export const fetchBlogs = () => async dispatch => {
    const response = await blogs.get('/blogs');
    dispatch({ type: FETCH_BLOGS, payload: response.data });
};

export const fetchBlog = (id) => async dispatch => {
    const response = await blogs.get(`/blogs/${id}`);
    dispatch({ type: FETCH_BLOG, payload: response.data });
};

export const editBlog = (id, formValues) => async dispatch => {
    const response = await blogs.patch(`/blogs/${id}`, formValues);
    dispatch({ type: EDIT_BLOG, payload: response.data });
    history.push('/');
};

export const deleteBlog = (id) => async dispatch => {
    await blogs.delete(`/blogs/${id}`);
    dispatch({ type: DELETE_BLOG, payload: id });
    history.push('/');
};






