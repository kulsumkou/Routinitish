import { useTheme } from "@/hooks";
import { StyleSheet } from "react-native";

const styles = () => {
    const { Colors } = useTheme();

    return StyleSheet.create({
        buttonView: {
            width: '92%',
            alignSelf: 'center',
            height: 50,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            backgroundColor: Colors.btnBg,
        },
        buttonText: {
            color: Colors.btnText,
        },
    })
}

export default styles;