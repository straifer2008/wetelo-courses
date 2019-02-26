import React from 'react';
import {compose, withState} from 'recompose';
import { connect } from "react-redux";
import { Button } from 'react-native-elements';
import {userRegister} from "../../state/auth/operations";
import { View, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import FormInput from "../formInput/formInput";
import { TextInputMask } from 'react-native-masked-text'
import s from './styles';

const RegisterForm = ({
                          navigation,
                          userName, setUserName,
                          userEmail, setUserEmail,
                          userPassword, setUserPassword,
                          userConfirmPassword, setUserConfirmPassword,
                          userPhone, setUserPhone,
                          userRegister, loading, error
                      }) => (
    <KeyboardAvoidingView
        style={s.container}
        behavior="padding"
        enabled={true}
    >
        <ScrollView style={s.container}>
                <FormInput
                    value={userName}
                    onChangeText={ (name) => setUserName(name) }
                    placeholder='Name'
                    validationMessage={error ? 'Name not valid' : null}
                />
                <FormInput
                    value={userEmail}
                    onChangeText={ (email) => setUserEmail(email) }
                    keyboardType={'email-address'}
                    placeholder='Email'
                    validationMessage={error ? 'email not valid' : null}
                />
                <FormInput
                    value={userPassword}
                    onChangeText={ (password) => setUserPassword(password) }
                    placeholder='Password'
                    secureTextEntry={true}
                    validationMessage={error ? 'Password not valid' : null}
                />
                <FormInput
                    value={userConfirmPassword}
                    onChangeText={ (confirmPassword) => setUserConfirmPassword(confirmPassword) }
                    placeholder='Password confirmation'
                    secureTextEntry={true}
                    validationMessage={error ? 'Password confirmation not valid' : null}
                />
            <View style={s.fieldWrap}>
                <TextInputMask
                    returnKeyType = { "next" }
                    style={s.phoneField}
                    type={'cel-phone'}
                    placeholder='Phone (000)-00-00-000'
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(999)-99-99-999'
                    }}
                    value={userPhone}
                    onChangeText={phone => setUserPhone(phone)}
                />
                {
                    error ? <Text style={s.errorText}>Phone is not valid</Text>: null
                }
            </View>
        </ScrollView>
        <View style={s.submitWrap}>
            {
                !loading ?
                    <Button
                        onPress={
                            () => userRegister({userName, userEmail, userPassword, userConfirmPassword, userPhone})
                        }
                        disabled={!(userName && userEmail && userPassword && userConfirmPassword && userPhone)}
                        title="Register"
                        type="solid"
                        icon={
                            <IconFA
                                name="check"
                                size={15}
                                color="white"
                            />
                        }
                    /> : <Button type='outline' loading/>
            }
            </View>
    </KeyboardAvoidingView>
);

const mapStateToProps = (state) => ({
    loading: state.authReducer.loading,
    error: state.authReducer.error,
    notifications: state.authReducer.notifications,
});
const mapDispatchToProps = ({
    userRegister
});

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withState('userName', 'setUserName', ''),
    withState('userEmail', 'setUserEmail', ''),
    withState('userPassword', 'setUserPassword', ''),
    withState('userConfirmPassword', 'setUserConfirmPassword', ''),
    withState('userPhone', 'setUserPhone', '')
);

export default enhance(RegisterForm);