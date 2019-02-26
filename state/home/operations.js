import {pikAvatarError, pikAvatarReceive, pikAvatarStart} from "./action";
import {ImagePicker, Permissions} from 'expo';

const getUserAvatarFromGallery = showModal => async dispatch => {
    dispatch(pikAvatarStart());
    try {
        const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
            aspect: 1,
            allowsEditing: true,
        });
        if (!cancelled) {
            dispatch(pikAvatarReceive(uri));
            showModal(false);
        }
    } catch (e) {
        dispatch(pikAvatarError(e));
    }
};

const getUserAvatarFromCamera = showModal => async dispatch => {
    dispatch(pikAvatarStart());
    try {
        const { cancelled, uri } = await ImagePicker.launchCameraAsync({
            allowsEditing: false,
        });
        if (!cancelled) {
            dispatch(pikAvatarReceive(uri));
            showModal(false);
        }
    } catch (e) {
        dispatch(pikAvatarError(e));
    }
};

export {
    getUserAvatarFromGallery,
    getUserAvatarFromCamera
}