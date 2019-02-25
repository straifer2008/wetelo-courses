import { createAction } from 'redux-actions';
import types from './types';

export const {
    testType
} = createAction(
    types.TEST_TYPE
);