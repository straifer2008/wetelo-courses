import React from 'react';
import {compose} from 'recompose';
import {View, TextInput, ScrollView} from 'react-native';
import {Button, Input} from "react-native-elements";
import { Formik } from 'formik';
import s from './styles';

const initialValues = {
    email: 'test@email',
    userName: 'Test user name'
};

const FormBuild = (props) => (
    <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}
    >
        {props => (
            <View style={s.formFiledWrap}>
                <ScrollView>
                    <Input
                        onBlur={props.handleBlur('email')}
                        value={props.values.email}
                        onChangeText={props.handleChange('email')}
                        placeholder='Email'
                        errorStyle={{ color: 'red' }}
                        errorMessage='ENTER A VALID ERROR HERE'
                    />
                    <Input
                        onBlur={props.handleBlur('userName')}
                        value={props.values.userName}
                        onChangeText={props.handleChange('userName')}
                        placeholder='userName'
                        errorStyle={{ color: 'red' }}
                        errorMessage='ENTER A VALID ERROR HERE'
                    />
                </ScrollView>

                <Button onPress={props.handleSubmit} title="Submit" />
            </View>
        )}
    </Formik>
);

const enhance = compose();
export default enhance(FormBuild);
