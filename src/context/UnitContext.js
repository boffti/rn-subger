import React from 'react'
import createDataContext from './createDataContext';

const UnitContext = React.createContext();

const unitReducer = (state, action) => {
    switch (action.type) {
        case 'getUnit':
            return state;
        case 'setUnit':
            return action.payload;
        default:
            return state;
    }
}

const getUnit = (dispatch) => {
    return async () => {
        dispatch({ type: 'getUnit' });
    }
}

const setUnit = (dispatch) => {
    return async (unit) => {
        dispatch({ type: 'setUnit', payload: unit });
    }
}

export const { Context, Provider } = createDataContext(
    unitReducer,
    { getUnit, setUnit },
    '/mo');

export default UnitContext;