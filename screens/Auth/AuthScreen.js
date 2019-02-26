import React from 'react';
import {compose} from 'recompose';
import RegisterForm from "../../components/registerForm/RegisterForm";
import {Button, ThemeProvider} from "react-native-elements";
import themes from "../../themes";
import IconFA from 'react-native-vector-icons/FontAwesome';
import Colors from "../../constants/colors";

const AuthScreen = ({navigation}) => (
    <ThemeProvider theme={themes.dark}>
        <RegisterForm navigation={navigation}/>
    </ThemeProvider>
);

AuthScreen.navigationOptions = ({navigation}) => ({
    title: 'Register',
    headerRight: (
        <Button
            type='outline'
            style={{paddingHorizontal: 10}}
            onPress={() => alert('This is INFO! mother fucker :)')}
            icon={
                <IconFA
                    name="info"
                    size={15}
                    color={Colors.blue}
                />
            }
        />
    ),
});

const enhance = compose();

export default enhance(AuthScreen);