import types from './types'

const initialState = {
    loading: false,
    confirmed: false,
    userIsLogged: false,
    token: null,
    error: null,
    notifications: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_REGISTER_START: {
            return {
                ...state,
                loading: true
            }
        }
        case types.USER_REGISTER_ERROR: {
            return {
                ...state,
                loading: false,
                notifications: null,
                error: action.payload
            }
        }
        case types.USER_REGISTER_RECEIVE: {
            return {
                ...state,
                loading: false,
                error: null,
                notifications: action.payload
            }
        }
        default: {
            return { ...state }
        }
    }
};

export default authReducer;