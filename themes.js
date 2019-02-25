import Colors from "./constants/colors";

const themes = {
    dark: {
        Button: {
            raised: true,
        },
        Avatar: {
            rounded: true,
        },
        Badge: {
            textStyle: { fontSize: 30 },
        },
        Input: {
            labelStyle: {
                color: Colors.text
            },
            placeholderStyle: {
                color: Colors.inputBg
            }
        }
    }
};

export default themes;