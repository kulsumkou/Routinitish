import React from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '@/hooks';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';
import {useTranslation} from 'react-i18next';

interface SetGoals {
  isSelected: {
    option1: boolean;
    option2: boolean;
    option3: boolean;
    option4: boolean;
  };
  setSelection: React.Dispatch<
    React.SetStateAction<{
      option1: boolean;
      option2: boolean;
      option3: boolean;
      option4: boolean;
    }>
  >;
}

const SetGoals: React.FC<SetGoals> = ({isSelected, setSelection}) => {
  const {t} = useTranslation(['registerFirstStep']);
  const {Layout, Gutters, Fonts} = useTheme();
  const {applyColor} = styles();

  return (
    <View style={[Gutters.regularHPadding]}>
      <Text
        style={[
          Fonts.textCenter,
          Fonts.textMedium,
          applyColor,
          Gutters.regularTPadding,
        ]}>
        {t('registerFirstStep:heading')}
      </Text>
      <Text
        style={[
          Fonts.textCenter,
          Fonts.textTiny,
          applyColor,
          Gutters.tinyTPadding,
        ]}>
        {t('registerFirstStep:subTitle')}
      </Text>
      <View style={[Gutters.largeVMargin]}>
        <View
          style={[
            Layout.row,
            Layout.alignItemsCenter,
            Layout.justifyContentBetween,
          ]}>
          <Text style={[Fonts.textSmall, applyColor]}>
            {t('registerFirstStep:option1')}
          </Text>
          <CheckBox
            disabled={false}
            value={isSelected.option1}
            onValueChange={newValue => {
              setSelection({...isSelected, option1: newValue});
            }}
          />
        </View>
        <View
          style={[
            Layout.row,
            Layout.alignItemsCenter,
            Layout.justifyContentBetween,
            Gutters.tinyVPadding,
          ]}>
          <Text style={[Fonts.textSmall, applyColor]}>
            {t('registerFirstStep:option2')}
          </Text>
          <CheckBox
            disabled={false}
            value={isSelected.option2}
            onValueChange={newValue => {
              setSelection({...isSelected, option2: newValue});
            }}
          />
        </View>
        <View
          style={[
            Layout.row,
            Layout.alignItemsCenter,
            Layout.justifyContentBetween,
          ]}>
          <Text style={[Fonts.textSmall, applyColor]}>
            {t('registerFirstStep:option3')}
          </Text>
          <CheckBox
            disabled={false}
            value={isSelected.option3}
            onValueChange={newValue => {
              setSelection({...isSelected, option3: newValue});
            }}
          />
        </View>
        <View
          style={[
            Layout.row,
            Layout.alignItemsCenter,
            Layout.justifyContentBetween,
            Gutters.tinyVPadding,
          ]}>
          <Text style={[Fonts.textSmall, applyColor]}>
            {t('registerFirstStep:option4')}
          </Text>
          <CheckBox
            disabled={false}
            value={isSelected.option4}
            onValueChange={newValue => {
              setSelection({...isSelected, option4: newValue});
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SetGoals;
