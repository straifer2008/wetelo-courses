import {StyleSheet} from "react-native";
import Colors from "../../constants/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        marginBottom: 20
    },
    submitWrap: {
        padding: 20
    },
    phoneField: {
        paddingBottom: 10,
        fontSize: 18,
        borderBottomWidth: 1,
        borderColor: Colors.grey
    },
    fieldWrap: {
        padding: 20
    },
    keyboardContainer: {
        height: '100%'
    },
    errorText: {
        color: Colors.danger
    }
});