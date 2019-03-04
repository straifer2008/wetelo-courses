import { createActions } from "redux-actions";
import types from "./types";

export const {
    registerCoursesStart,
    registerCoursesError,
    registerCoursesReceive,
} = createActions(
    types.REGISTER_COURSES_START,
    types.REGISTER_COURSES_ERROR,
    types.REGISTER_COURSES_RECEIVE
);