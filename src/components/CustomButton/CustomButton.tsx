import { Text, TouchableOpacity, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import styles from './styles';

interface CusButtonProps {
    onPress?: () => void;
    Title: string;
    cusStyles?: ViewStyle;
}

const CustomButton: React.FC<CusButtonProps> = ({ onPress, Title, cusStyles }) => {
    const { Fonts } = useTheme();
    const { buttonView, buttonText } = styles();

    return (
        <TouchableOpacity onPress={onPress} style={[buttonView, cusStyles]} >
            <Text style={[Fonts.textSmall, buttonText]}>{Title ?? 'CusButton'}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;