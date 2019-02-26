import types from "./types";

const initialState = {
    userAvatar: null,
    loading: false,
    error: null
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.PIK_AVATAR_START:{
            return { ...state, loading: true };
        }
        case types.PIK_AVATAR_ERROR: {
            return { ...state, loading: false, error: action.payload };
        }
        case types.PIK_AVATAR_RECEIVE: {
            return { ...state, loading: false, userAvatar: action.payload };
        }
        default:
            return { ...state }
    }
};

export default homeReducer;