import React from 'react';
import {compose, withState} from 'recompose';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Button } from "react-native-elements";
import { Formik } from 'formik';
import {
    handleTextInput,
    withNextInputAutoFocusInput,
    withNextInputAutoFocusForm
} from "react-native-formik";
import TagsComponent from "../test/TagsComponent";
import * as Yup from "yup";
import s from './styles';

const MyInput = compose(
    handleTextInput,
    withNextInputAutoFocusInput
)(TextField);

const Form = withNextInputAutoFocusForm(View);
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email("well that's not an email"),
    password: Yup.string().required().min(2, "pretty sure this will be hacked"),
    firstName: Yup.string().min(2, "First name so short").max(20, "First name so long"),
    lastName: Yup.string().min(3, "First name so short").max(20, "First name so long"),
    lastJob: Yup.string().min(3, "Field so short"),
    aboutMyself: Yup.string().min(3, "Field so short"),
    tags: Yup.array().required()
});

const FormBuild = ({onSubmitForm}) => (
    <KeyboardAvoidingView behavior="padding" enabled style={s.wrap}>
        <Formik
            validationSchema={validationSchema}
            onSubmit={onSubmitForm}
            render={props => (
                <Form style={s.formFiledWrap}>
                    <ScrollView>
                        <MyInput label="Email" name="email" type="email" />
                        <MyInput label="Пароль" name="password" type="password" />
                        <MyInput label="Ім'я" name="firstName" type="name" />
                        <MyInput label="Прізвище" name="lastName" type="name" />
                        <TagsComponent
                            label='Які мови програмування Ви знаєте?(Написати через пробіл)'
                            name='tags'
                            type='tags'
                        />
                        <MyInput label="Попереднє місце роботи" name="lastJob" type="text" />
                        <MyInput label="Про себе" name="aboutMyself" type="text" multiline />
                    </ScrollView>
                    <Button onPress={props.handleSubmit} title="Submit" />
                </Form>
            )}
        />
    </KeyboardAvoidingView>
);

const enhance = compose();
export default enhance(FormBuild);
