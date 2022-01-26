import React from 'react'
import { v4 as uuid } from 'uuid';
import createDataContext from './createDataContext';
// import jsonServer from '../api/jsonServer';
import { data } from '../../data.js';

const SubContext = React.createContext();
const INITIAL_STATE = data;

const subReducer = (state, action) => {
    switch (action.type) {
        case 'getSubs':
            return state;
        case 'addSub':
            id = uuid();
            state = [...state, { ...action.payload, id }];
            return state;
        case 'deleteSub':
            return state.filter(blog => blog.id !== action.payload);
        case 'editSub':
            return state.map(blog => blog.id === action.payload.id ? action.payload : blog);
        default:
            return state;
    }
}

const getSubs = (dispatch) => {
    return async () => {
        // const response = await jsonServer.get('/blogs');
        dispatch({ type: 'getSubs' });
    }
}

const addSub = (dispatch) => {
    return async (data, callback) => {
        dispatch({ type: 'addSub', payload: data });
        // await jsonServer.post('/blogs', { title, content });
        if (callback) {
            callback();
        }
    }
}

const editSub = (dispatch) => {
    return async (id, title, content, callback) => {
        // dispatch({ type: 'editBlog', payload: { id, title, content } });
        jsonServer.put(`/blogs/${id}`, { title, content });
        if (callback) {
            callback();
        }
    }
}

const deleteSub = (dispatch) => {
    // return (id) => dispatch({ type: 'deleteBlog', payload: id });
    return async (id, callback) => {
        await jsonServer.delete(`/blogs/${id}`);
        dispatch({ type: 'deleteBlog', payload: id });
        if (callback) {
            callback();
        }
    }
}

export const { Context, Provider } = createDataContext(
    subReducer,
    { getSubs, addSub, editSub, deleteSub },
    INITIAL_STATE);

export default SubContext;