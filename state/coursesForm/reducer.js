import types from "./types";


const initialState = {
    loading: false,
    error: null,
    query: []
};

const registerCoursesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_COURSES_START: {
            return {
                ...state,
                loading: true
            }
        }
        case types.REGISTER_COURSES_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case types.REGISTER_COURSES_RECEIVE: {
            state.query.push(action.payload);
            return {
                ...state,
                loading: false,
                error: null,
            }
        }
        default: {
            return { ...state }
        }
    }
};

export default registerCoursesReducer;