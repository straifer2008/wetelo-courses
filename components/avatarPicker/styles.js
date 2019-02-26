import {StyleSheet} from "react-native";
import Colors from "../../constants/colors";

export default StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 21,
    },
    row: {
        flexDirection: 'row'
    },
    image: {
        width: 300,
        height: 300,
        backgroundColor: 'gray'
    },
    button: {
        padding: 13,
        margin: 15,
        backgroundColor: '#dddddd',
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});