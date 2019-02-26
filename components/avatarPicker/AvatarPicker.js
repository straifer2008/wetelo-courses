import React from 'react';
import {compose, withHandlers, withState} from 'recompose';
import {Avatar, Text} from "react-native-elements";
import {View, TouchableOpacity} from "react-native";
import {ImagePicker, Permissions} from 'expo'
import ConfirmModal from "../confirmModal/ConfirmModal";
import s from './styles'

const AvatarPicker = ({
                          modal, showModal,
                          image, setImage,
                          _selectPicture, _takePicture
}) => (
    <View style={s.wrapper}>
        <TouchableOpacity onPress={ () => showModal(!modal) }>
            {
                image ?
                    <Avatar
                        size="xlarge"
                        title="Logo"
                        rounded
                        showEditButton
                        source={{uri: image}}
                    /> :
                    <Avatar
                        size="xlarge"
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
            leftBtnPress={ _selectPicture }
            rightBtnPress={ _takePicture }
            children={false}
        >
            <Text style={{fontSize: 24}}>Choose where take foto</Text>
        </ConfirmModal>
    </View>
);

const enhance = compose(
    withState('modal', 'showModal', false),
    withState('image', 'setImage', null),
    withHandlers({
        _selectPicture: props => async () => {
            const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
                aspect: 1,
                allowsEditing: true,
            });
            if (!cancelled) {
                props.setImage(uri);
                props.showModal(false);
            }
        },
        _takePicture: props => async () => {
            // Запит на дозвіл доступу до камери
            // await Permissions.askAsync(Permissions.CAMERA);
            const { cancelled, uri } = await ImagePicker.launchCameraAsync({
                allowsEditing: false,
            });
            props.setImage(uri);
            props.showModal(false);
        }
    })
);
export default enhance(AvatarPicker);