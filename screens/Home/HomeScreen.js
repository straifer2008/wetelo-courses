import React from 'react';
import { compose } from 'recompose';
import {
    View,
    Text,
    Button
} from 'react-native';
import s from './styles'

const HomeScreen = ({
                        navigation
                    }) => (
    <View style={s.container}>
        <Text style={s.text}>Home screen loaded</Text>
        <Button
            title="Go to Auth"
            onPress={() => navigation.push('Auth')}
        />
        <Button
            title="Go to Home... again"
            onPress={() => navigation.push('Home')}
        />
        <Button
            title="Go to Auth"
            onPress={() => navigation.navigate('Auth')}
        />
        <Button
            title="Go back"
            onPress={() => navigation.goBack()}
        />
    </View>
);

const enhance = compose();

export default enhance(HomeScreen);