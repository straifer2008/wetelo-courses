import React from 'react';
import { compose } from 'recompose';
import {ScrollView, View} from 'react-native';
import {Header, ThemeProvider, Button, Icon, Card, Text, Avatar} from "react-native-elements";
import HomeAvatar from "../../components/homeAvatar/HomeAvatar";
import AvatarPicker from "../../components/avatarPicker/AvatarPicker";
import themes from "../../themes";
import s from './styles'

const HomeScreen = ({
                        navigation,
                        language
                    }) => (
    <ThemeProvider theme={themes.dark}>
        <Header
            leftComponent={
                <Button
                    onPress={() => navigation.push('Auth')}
                    icon={
                        <Icon
                            name="chevron-left"
                            type="font-awesome"
                            size={20}
                            color="white"
                        />
                    }
                />
            }
            centerComponent={{ text: 'Home', style: { color: '#fff' } }}
            rightComponent={
                <HomeAvatar/>
            }
        />
        <ScrollView style={s.container}>
            <Card
                title='User name'>
                <AvatarPicker/>
                <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <Button
                    icon={<Icon name='wpforms' type='font-awesome' color='#ffffff' />}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Form to fill' />
            </Card>
        </ScrollView>
    </ThemeProvider>
);

HomeScreen.navigationOptions = {
    header: null
};

const enhance = compose();

export default enhance(HomeScreen);