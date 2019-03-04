import React from "react";
import {View} from 'react-native';
import {compose} from 'recompose';
import {Text} from "react-native-elements";

const LoginForm = () => (
    <View>
        <Text>LoginForm loaded</Text>
    </View>
);

const enhance = compose();
export default enhance(LoginForm);