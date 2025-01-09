import { useTheme } from "@/hooks";
import { StyleSheet } from "react-native";

const styles = () => {
    const { Colors } = useTheme();

    return StyleSheet.create({
        inputView: {
            flexDirection: 'row',
            width: '92%',
            height: 54,
            backgroundColor: Colors.btnText,
            borderColor: Colors.inputBorder,
            borderWidth: 1,
            borderRadius: 8,
            alignSelf: 'center',
            alignItems: 'center',
        },
        inputStyle: {
            flex: 1,
            fontSize: 16,
            marginHorizontal: '4%',
            color: Colors.btnBg,
        },
    })
}

export default styles;