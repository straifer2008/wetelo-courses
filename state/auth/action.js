import types from "./types";
import {createActions} from "redux-actions";

export const {
    userRegisterStart,
    userRegisterError,
    userRegisterReceive,
    userLogoutStart,
    userLogoutError,
    userLogoutReceive,
} = createActions(
    types.USER_REGISTER_START,
    types.USER_REGISTER_ERROR,
    types.USER_REGISTER_RECEIVE,
    types.USER_LOGOUT_START,
    types.USER_LOGOUT_ERROR,
    types.USER_LOGOUT_RECEIVE,
);