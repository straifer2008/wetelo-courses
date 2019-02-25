import types from "./types";

const initialState = {
    test: false
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case (types.TEST_TYPE):
            return { ...state, test: true };
        default:
            return { ...state }
    }
};

export default homeReducer;