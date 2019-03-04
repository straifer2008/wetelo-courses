import React from 'react';
import {compose, withHandlers, withState} from 'recompose';
import {Avatar, Text} from "react-native-elements";
import {View, TouchableOpacity} from "react-native";
import {ImagePicker, Permissions} from 'expo';
import ConfirmModal from "../confirmModal/ConfirmModal";
import s from './styles'
import {connect} from "react-redux";
import {getUserAvatarFromCamera, getUserAvatarFromGallery} from "../../state/home/operations";

const AvatarPicker = ({
                          modal, showModal,
                          userAvatar, loading, error,
                          getUserAvatarFromGallery, getUserAvatarFromCamera
}) => (
    <View style={s.wrapper}>
        <TouchableOpacity onPress={ () => showModal(!modal) }>
            {
                userAvatar ?
                    <Avatar
                        size="large"
                        title="Logo"
                        rounded
                        showEditButton
                        source={{uri: userAvatar}}
                    /> :
                    <Avatar
                        size="large"
                        title="Logo"
                        showEditButton
                        rounded
                    />

            }
        </TouchableOpacity>
        <ConfirmModal
            leftBtn='Gallery'
            rightBtn='Camera'
            visibleModal={modal}
            onPress={ () => showModal(!modal) }
            leftBtnPress={ () => getUserAvatarFromGallery(showModal, modal) }
            rightBtnPress={ () => getUserAvatarFromCamera(showModal, modal) }
            children={false}
        >
            <Text style={{fontSize: 24}}>Choose where take foto</Text>
        </ConfirmModal>
    </View>
);

const mapDispatchToProps = ({
    getUserAvatarFromGallery,
    getUserAvatarFromCamera
});

const mapStateToProps = (state) => ({
    userAvatar: state.homeReducer.userAvatar,
    loading: state.homeReducer.loading,
    error: state.homeReducer.error,
});

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withState('modal', 'showModal', false),
    withHandlers({})
);
export default enhance(AvatarPicker);