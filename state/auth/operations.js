import {apiGet, apiPost} from "../../utils/helpers/apiHelper";
import {
    userLogoutError,
    userLogoutReceive,
    userLogoutStart,
    userRegisterError,
    userRegisterReceive,
    userRegisterStart
} from "./action";

const userRegister = ({
                          userName,
                          userEmail,
                          userPassword,
                          userConfirmPassword,
                          userPhone
}) => async (dispatch) => {

    dispatch(userRegisterStart());

    try {

        const {data} = await apiPost('https://my-json-server.typicode.com/typicode/demo/posts', {
            userName,
            userEmail,
            userPassword,
            userConfirmPassword,
            userPhone
        });
        dispatch(userRegisterReceive({...data}));
    } catch (e) {
        dispatch(userRegisterError(e));

    }
};

const logout = () => (dispatch) => {
    dispatch(userLogoutStart());

    try {
        dispatch(userLogoutReceive({message: 'Success logout'}));
    } catch (e) {
        dispatch(userLogoutError(e));
    }
};

export {
    userRegister,
    logout
}