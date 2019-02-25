import {StyleSheet} from "react-native";
import Colors from "../../constants/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg,
        color: Colors.text,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: Colors.text
    }
});