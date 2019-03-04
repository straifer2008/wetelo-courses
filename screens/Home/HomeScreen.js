import React from 'react';
import { compose } from 'recompose';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import {Header, ThemeProvider, Button, Icon, Card, Text } from "react-native-elements";
import QueryList from "../../components/queryList/QueryList";
import HomeAvatar from "../../components/homeAvatar/HomeAvatar";
import AvatarPicker from "../../components/avatarPicker/AvatarPicker";
import themes from "../../themes";
import {connect} from "react-redux";
import Colors from "../../constants/colors";
import s from './styles'

const HomeScreen = ({
                        navigation,
                        loading,
                        error,
                        query
                    }) => (
    <ThemeProvider theme={themes.dark}>
        <Header
            centerComponent={{ text: 'Wetelo', style: { color: '#fff', fontSize: 24 } }}
            rightComponent={
                <HomeAvatar/>
            }
        />
        <View style={s.container}>
            <Card
                title='User name'>
                <AvatarPicker/>
                <Text style={s.textCenter}>
                    Натисніть кнопку нижче для того щоб заповнити заявку на курси по JS
                </Text>
                <Button
                    onPress={ () => navigation.push('Form') }
                    titleStyle={{marginLeft: 15}}
                    icon={<Icon name='wpforms' type='font-awesome' color='#ffffff' />}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Заповнити форму' />
            </Card>
            {
                loading ? <ActivityIndicator size='large' color={Colors.blue} /> :
                    <ScrollView style={s.containerScroll}>
                        <QueryList query={query}/>
                    </ScrollView>
            }
        </View>
    </ThemeProvider>
);

HomeScreen.navigationOptions = {
    header: null
};

const mapStateToProps = (state) => ({
    loading: state.registerCoursesReducer.loading,
    error: state.registerCoursesReducer.error,
    query: state.registerCoursesReducer.query
});

const enhance = compose(
    connect(mapStateToProps)
);

export default enhance(HomeScreen);