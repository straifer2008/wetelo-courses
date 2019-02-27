import React from 'react';
import {compose} from 'recompose';
import { View } from 'react-native';
import Tags from "react-native-tags";
import {Text} from "react-native-elements";
import Colors from "../../constants/colors";
import s from './styles';
import { withFormikControl } from "react-native-formik";

const TagsComponent = ({
                           label,
                           value,
                           setFieldTouched,
                           error,
                           setFieldValue
                       }) => (
    <View style={s.wrap}>
        {
            label ? <Text style={s.label}>{label}</Text> : null
        }
        <Tags
            style={s.tags}
            tagContainerStyle={{backgroundColor: Colors.bg}}
            inputContainerStyle={{backgroundColor: 'transparent', borderColor: 'grey', borderWidth: 1}}
            initialTags={value}
            onTagPress={setFieldTouched}
            onChangeTags={setFieldValue}
        />
        {
            error ? <Text style={s.error}>{error}</Text> : null
        }
    </View>
);

const enhance = compose(
    withFormikControl,
);

export default enhance(TagsComponent);