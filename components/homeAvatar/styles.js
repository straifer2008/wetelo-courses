import {StyleSheet} from "react-native";
import Colors from "../../constants/colors";

export default StyleSheet.create({
    closeModal: {
        position: 'absolute',
        right: 5,
        top: 5,
        width: 25,
        height: 25
    },
    modalOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalView: {
        marginTop: 65,
        marginLeft: 50,
        marginRight: 10
    }
});