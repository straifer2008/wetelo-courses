import { combineReducers } from 'redux';
import homeReducer from "./home/reducer";
import authReducer from './auth/reducer'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer,
    authReducer,
    homeReducer
});

export default rootReducer;