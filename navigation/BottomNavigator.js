import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import HomeScreen from "../screens/Home/HomeScreen";
import AuthScreen from "../screens/Auth/AuthScreen";

const BottomNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Auth: AuthScreen,
});

export default createAppContainer(BottomNavigator);