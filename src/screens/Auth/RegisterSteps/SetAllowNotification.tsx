import React from 'react';
import {Text, View, Image} from 'react-native';
import {useTheme} from '@/hooks';
import styles from './styles';
import {useTranslation} from 'react-i18next';

const SetAllowNotification: React.FC = () => {
  const {t} = useTranslation(['registerFirstStep']);
  const {Layout, Gutters, Fonts, Images} = useTheme();
  const {applyColor, imgStyle} = styles();

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
          {t('registerFirstStep:fifthHeading')}
        </Text>
        <Text
          style={[
            Fonts.textCenter,
            Fonts.textTiny,
            applyColor,
            Gutters.tinyTPadding,
          ]}>
          {t('registerFirstStep:notificationText')}
        </Text>
      </View>
      <View style={[Gutters.largeTMargin]} />
      <View
        style={[
          Layout.row,
          Layout.alignItemsCenter,
          Layout.justifyContentCenter,
          Gutters.largeTMargin,
        ]}>
        <Image source={Images.notification} style={imgStyle} />
      </View>
    </>
  );
};

export default SetAllowNotification;
