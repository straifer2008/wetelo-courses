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
                userIsLogged: false,
                notifications: null,
                error: action.payload
            }
        }
        case types.USER_REGISTER_RECEIVE: {
            return {
                ...state,
                loading: false,
                error: null,
                userIsLogged: true,
                notifications: action.payload
            }
        }
        case types.USER_LOGOUT_START: {
            return {
                ...state,
                loading: true,
                error: null,
            }
        }
        case types.USER_LOGOUT_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case types.USER_LOGOUT_RECEIVE: {
            return {
                ...state,
                loading: false,
                error: null,
                userIsLogged: false,
                notifications: action.payload
            }
        }
        default: {
            return { ...state }
        }
    }
};

export default authReducer;