import {apiGet, apiPost} from "../../utils/helpers/apiHelper";
import {userRegisterError, userRegisterReceive, userRegisterStart} from "./action";

const userRegister = ({
                          userName,
                          userEmail,
                          userPassword,
                          userConfirmPassword,
                          navigation
}) => async (dispatch) => {

    dispatch(userRegisterStart());

    try {

        const {data} = await apiPost('https://my-json-server.typicode.com/typicode/demo/posts', {
            userName,
            userEmail,
            userPassword,
            userConfirmPassword,
        });
        dispatch(userRegisterReceive({...data}));
        navigation.navigate('Home')
    } catch (e) {
        dispatch(userRegisterError(e));

    }
};

export {
    userRegister
}