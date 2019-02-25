import types from "./types";
import {createActions} from "redux-actions";

export const {
    userRegisterStart,
    userRegisterError,
    userRegisterReceive,
} = createActions(
    types.USER_REGISTER_START,
    types.USER_REGISTER_ERROR,
    types.USER_REGISTER_RECEIVE
);