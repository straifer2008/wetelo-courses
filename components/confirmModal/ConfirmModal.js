import React from 'react';
import {Modal, TouchableWithoutFeedback, View} from 'react-native';
import {compose} from 'recompose';
import s from "./styles";
import {Button} from "react-native-elements";

const ConfirmModal = ({
                          leftBtn, leftBtnPress,
                          rightBtn, rightBtnPress,
                          visibleModal,
                          onPress,
                          children
}) => (
    <Modal
        visible={visibleModal}
        animationType="fade"
        transparent
    >
        <View style={s.modalWrapper}>
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={s.modalOverlay} />
            </TouchableWithoutFeedback>

            <View style={s.modalView}>
                {
                    children ? children: null
                }

                <View style={s.row}>
                    <Button
                        buttonStyle={s.buttonStyle}
                        title={leftBtn}
                        type="solid"
                        onPress={leftBtnPress}
                    />
                    <Button
                        buttonStyle={s.buttonStyle}
                        title={rightBtn}
                        type="outline"
                        onPress={rightBtnPress}
                    />
                </View>
            </View>
        </View>
    </Modal>
);

const enhance = compose();
export default enhance(ConfirmModal);