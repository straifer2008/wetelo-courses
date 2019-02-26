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
            centerComponent={{ text: 'Wetelo', style: { color: '#fff', fontSize: 24 } }}
            rightComponent={
                <HomeAvatar/>
            }
        />
        <ScrollView style={s.container}>
            <Card
                title='User name'>
                <AvatarPicker/>
                <Text style={s.textCenter}>
                    Натисніть кнопку нижче для того щоб заповнити заявку на курси по JS
                </Text>
                <Button
                    titleStyle={{marginLeft: 15}}
                    icon={<Icon name='wpforms' type='font-awesome' color='#ffffff' />}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Заповнити форму' />
            </Card>
        </ScrollView>
    </ThemeProvider>
);

HomeScreen.navigationOptions = {
    header: null
};

const enhance = compose();

export default enhance(HomeScreen);