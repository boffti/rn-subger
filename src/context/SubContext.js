import React from 'react'
import { AppState } from 'react-native';
import createDataContext from './createDataContext';
// import jsonServer from '../api/jsonServer';

const SubContext = React.createContext();
const INITIAL_STATE = [
    { id: '1', name: 'Netflix', price: '20', color: '#EF5350', desc: 'This is the description',  billPeriod: '1', billUnit: 'Month', firstPayment: '20', paymentMethod: 'Credit Card', note: 'This is the note' },
    { id: '2', name: 'Spotify', price: '5', color: '#66BB6A', desc: 'This is the description', billPeriod: '1', billUnit: 'Month', firstPayment: '20', paymentMethod: 'Credit Card', note: 'This is the note' },
    { id: '3', name: 'Amazon', price: '10', color: '#FFCA28', desc: 'This is the description', billPeriod: '1', billUnit: 'Month', firstPayment: '20', paymentMethod: 'Credit Card', note: 'This is the note' },
    { id: '4', name: 'Google', price: '25', color: '#9FA8DA', desc: 'This is the description',  billPeriod: '1', billUnit: 'Month', firstPayment: '20', paymentMethod: 'Credit Card', note: 'This is the note' },
    { id: '5', name: 'Tinder', price: '50', color: '#F48FB1', desc: 'This is the description', billPeriod: '1', billUnit: 'Month', firstPayment: '20', paymentMethod: 'Credit Card', note: 'This is the note' },
];

const subReducer = (state, action) => {
    switch (action.type) {
        case 'getSubs':
            return state;
        case 'addSub':
            id = (parseInt(state[state.length - 1].id) + 1).toString();
            new_state= [...state, { ...action.payload, id }];
            console.log(new_state);
            return new_state;
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