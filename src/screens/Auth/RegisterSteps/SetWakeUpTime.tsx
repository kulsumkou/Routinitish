import React from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '@/hooks';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import TimeInput from './TimeInput';

interface SetWakeUpTime {
  onTextHHChange: (text: string) => void;
  onTextMMChange: (text: string) => void;
  onPress?: () => void;
}

const SetWakeUpTime: React.FC<SetWakeUpTime> = ({
  onTextHHChange,
  onTextMMChange,
  onPress,
}) => {
  const {t} = useTranslation(['registerFirstStep']);
  const {Gutters, Fonts} = useTheme();
  const {applyColor} = styles();

  return (
    <>
      <View style={[Gutters.regularHPadding]}>
        <Text
          style={[
            Fonts.textCenter,
            Fonts.textMedium,
            applyColor,
            Gutters.regularTPadding,
          ]}>
          {t('registerFirstStep:secondHeading')}
        </Text>
      </View>
      <View style={[Gutters.largeTMargin]} />
      <TimeInput
        onPress={onPress}
        onChangeHH={onTextHHChange}
        onChangeMM={onTextMMChange}
      />
    </>
  );
};

export default SetWakeUpTime;
