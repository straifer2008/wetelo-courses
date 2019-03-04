import {registerCoursesError, registerCoursesReceive, registerCoursesStart} from "./action";


const registerToCoursesSubmit = (data, navigation) => (dispatch) => {
    dispatch(registerCoursesStart());

    try {
        dispatch(registerCoursesReceive(data));
        navigation.goBack();
    } catch (e) {
        dispatch(registerCoursesError(e));
    }
};

export {
    registerToCoursesSubmit
}