import React from 'react';
import {compose, withState} from 'recompose';
import {Avatar, ListItem} from "react-native-elements";
import {Modal, View, TouchableWithoutFeedback} from 'react-native';
import {connect} from "react-redux";
import s from './styles'
import {logout} from "../../state/auth/operations";

const HomeAvatar = ({dropDown, toggleDropDown, logout, userAvatar}) => (
    <View>
        <Avatar
            onPress={() => toggleDropDown(dropDown = !dropDown)}
            source={{
                uri: userAvatar ? userAvatar : 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            }}
        />
        <Modal
            animationType="fade"
            transparent
            visible={dropDown}
        >
            <TouchableWithoutFeedback onPress={ () => toggleDropDown(dropDown = !dropDown) }>
                <View style={s.modalOverlay} />
            </TouchableWithoutFeedback>

            <View style={s.modalView}>
                <ListItem
                    title='Edit profile'
                    leftIcon={{
                        rounded: true,
                        type: 'font-awesome',
                        name: 'gear',
                        color: '#f50'
                    }}
                />
                <ListItem
                    title='Log out'
                    leftIcon={{
                        rounded: true,
                        type: 'font-awesome',
                        name: 'power-off',
                        color: '#f50'
                    }}
                    onPress={ () => logout() }
                />
            </View>
        </Modal>


    </View>
);

const mapStateToProps = (state) => ({
    userAvatar: state.homeReducer.userAvatar,
    loading: state.homeReducer.loading,
    error: state.homeReducer.error,
});
const mapDispatchToProps = ({
    logout
});
const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withState('dropDown', 'toggleDropDown', false)
);
export default enhance(HomeAvatar);