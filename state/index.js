import { combineReducers } from 'redux';
import homeReducer from "./home/reducer";
import authReducer from './auth/reducer'
import registerCoursesReducer from './coursesForm/reducer'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer,
    authReducer,
    homeReducer,
    registerCoursesReducer
});

export default rootReducer;