import React from 'react';
import {createAppContainer, createStackNavigator} from "react-navigation";
import HomeScreen from "../screens/Home/HomeScreen";
import AuthScreen from "../screens/Auth/AuthScreen";



const HomeNavigator = createStackNavigator({
    Home: HomeScreen,
    Auth: AuthScreen,
},{
    initialRouteName: "Home"
});

export default createAppContainer(HomeNavigator);