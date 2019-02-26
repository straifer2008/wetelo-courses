import React from 'react';
import { compose } from 'recompose';
import {ScrollView, Picker} from 'react-native';
import {Header, ThemeProvider, Button, Icon} from "react-native-elements";
import HomeAvatar from "../../components/homeAvatar/HomeAvatar";
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
            <Picker selectedValue={language}>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="test" value="test" />
                <Picker.Item label="test2" value="test2" />
            </Picker>
        </ScrollView>
    </ThemeProvider>
);

HomeScreen.navigationOptions = {
    header: null
};

const enhance = compose();

export default enhance(HomeScreen);