import {StyleSheet} from "react-native";
import Colors from "../../constants/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: Colors.bg,
        color: Colors.text
    },
    text: {
        color: Colors.text
    }
});