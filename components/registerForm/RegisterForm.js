import React from 'react';
import {compose, withState} from 'recompose';
import { connect } from "react-redux";
import { Button } from 'react-native-elements';
import {userRegister} from "../../state/auth/operations";
import { View } from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconE from 'react-native-vector-icons/Entypo';
import Colors from "../../constants/colors";
import FormInput from "../formInput/formInput";
import s from './styles'

const RegisterForm = ({
                          navigation,
                          userName, setUserName,
                          userEmail, setUserEmail,
                          userPassword, setUserPassword,
                          userConfirmPassword, setUserConfirmPassword,
                          userRegister, loading, error
                      }) => (
    <View>
        <FormInput
            value={userName}
            onChangeText={ (name) => setUserName(name) }
            placeholder='name'
            label='Enter your name'
            icon={
                <IconFA
                    name='user'
                    size={24}
                    color='#00aced' />
            }
            validationMessage={error ? 'Name not valid' : null}
        />
        <FormInput
            value={userEmail}
            onChangeText={ (email) => setUserEmail(email) }
            placeholder='Email'
            label='Enter your Email'
            icon={
                <IconE
                    name='email'
                    size={24}
                    color={Colors.blue} />
            }
            validationMessage={error ? 'email not valid' : null}
        />
        <FormInput
            value={userPassword}
            onChangeText={ (password) => setUserPassword(password) }
            placeholder='Password'
            label='Enter your Password'
            icon={
                <IconE
                    name='login'
                    size={24}
                    color={Colors.blue} />
            }
            validationMessage={error ? 'Password not valid' : null}
        />
        <FormInput
            value={userConfirmPassword}
            onChangeText={ (confirmPassword) => setUserConfirmPassword(confirmPassword) }
            placeholder='Password confirmation'
            label='Confirm your Password'
            icon={
                <IconE
                    name='login'
                    size={24}
                    color={Colors.blue} />
            }
            validationMessage={error ? 'Password confirmation not valid' : null}
        />

        <View style={s.submitWrap}>
        {
            !loading ?
                <Button
                    onPress={
                        () => userRegister({userName, userEmail, userPassword, userConfirmPassword, navigation})
                    }
                    disabled={!(userName && userEmail && userPassword && userConfirmPassword)}
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
    </View>
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
    withState('userConfirmPassword', 'setUserConfirmPassword', '')
);

export default enhance(RegisterForm);