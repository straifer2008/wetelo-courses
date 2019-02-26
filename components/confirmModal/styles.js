import {StyleSheet, Dimensions} from "react-native";
import Colors from "../../constants/colors";
let deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    modalOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    modalWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 20,
        backgroundColor: Colors.bg,
    },
    row: {
        margin: 20,
        width: deviceWidth,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonStyle: {
        paddingHorizontal: 40,
        paddingVertical: 20,
    }
});