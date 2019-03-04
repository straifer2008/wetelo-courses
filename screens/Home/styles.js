import {StyleSheet} from "react-native";
import Colors from "../../constants/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg,
        color: Colors.text,
    },
    text: {
        color: Colors.text
    },
    textCenter: {
        color: Colors.text,
        textAlign: 'center',
        paddingVertical: 20
    },
    containerScroll: {
        flex: 1,
        marginTop: 10,
    }
});