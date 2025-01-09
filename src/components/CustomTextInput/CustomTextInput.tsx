import { useTheme } from '@/hooks';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import styles from './styles';

interface Props {
    inputPlaceholder: string;
    inputType: string;
    onInputChange: (text: string) => void;
    typePass?: boolean;
}

const CustomTextInput: React.FC<Props> = ({
    inputPlaceholder,
    inputType,
    onInputChange,
    typePass,
}) => {
    const [inputValue, setInputValue] = useState<string>('');
    const { Colors } = useTheme();
    const { inputView, inputStyle } = styles();

    const handleTextChange = (text: string) => {
        setInputValue(text);
        onInputChange(text);
    };

    return (
        <View style={inputView}>
            <TextInput
                style={inputStyle}
                value={inputValue}
                onChangeText={handleTextChange}
                placeholder={inputPlaceholder}
                placeholderTextColor={Colors.placeHolderColor}
                keyboardType={inputType as any}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={typePass}
            />
        </View>
    );
};

export default CustomTextInput;