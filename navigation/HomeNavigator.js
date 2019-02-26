import React from 'react';
import {createAppContainer, createStackNavigator} from "react-navigation";
import HomeScreen from "../screens/Home/HomeScreen";
import AuthScreen from "../screens/Auth/AuthScreen";
import CoursesForm from "../screens/CoursesForm/CoursesForm";



const HomeNavigator = createStackNavigator({
    Home: HomeScreen,
    Auth: AuthScreen,
    Form: CoursesForm
},{
    initialRouteName: "Home"
});

export default createAppContainer(HomeNavigator);