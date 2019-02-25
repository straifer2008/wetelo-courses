import React from 'react';
import { compose } from 'recompose';
import {Input} from "react-native-elements";
import {View} from 'react-native';
import Colors from "../../constants/colors";
import s from './styles'

const FormInput = ({value, onChangeText, placeholder, label, icon, validationMessage}) => (
    <View style={s.inputWrap}>
        <Input
            style={s.input}
            value={ value }
            onChangeText={ onChangeText }
            placeholder={ placeholder }
            label={ label }
            leftIcon={ icon }
            shake={true}
            errorStyle={{ color: Colors.danger }}
            errorMessage={ validationMessage }
        />
    </View>
);

const enhance = compose();

export default enhance(FormInput);