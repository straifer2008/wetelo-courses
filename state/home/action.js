import { createActions } from 'redux-actions';
import types from './types';

export const {
    pikAvatarStart,
    pikAvatarError,
    pikAvatarReceive,
} = createActions(
    types.PIK_AVATAR_START,
    types.PIK_AVATAR_ERROR,
    types.PIK_AVATAR_RECEIVE,
);