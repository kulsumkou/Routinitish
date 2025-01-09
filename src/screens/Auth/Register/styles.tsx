import { useTheme } from "@/hooks";
import { StyleSheet } from "react-native";

const styles = () => {
    const { Colors } = useTheme();

    return StyleSheet.create({
        mainContainer: {
            backgroundColor: Colors.mainBgColor,
        },
        inputView: {
            marginTop: '15%',
            width: '98%',
            alignSelf: 'center',
        },
        divider: {
            height: 14,
        },
        termStyle: {
            marginHorizontal: '5%',
            marginTop: '5%',
        },
        termsofservice: {
            color: Colors.greenText,
            textDecorationLine: 'underline',
        },
        socialView: {
            marginHorizontal: '5%',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        appleBtn: {
            paddingVertical: 14,
            paddingHorizontal: 50,
            backgroundColor: 'transparent',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: Colors.appleColor,
        },
    })
}

export default styles;