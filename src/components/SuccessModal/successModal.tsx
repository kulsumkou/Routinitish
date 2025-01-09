import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '@/hooks';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import CustomButton from '../CustomButton/CustomButton';

interface Props {
  onPress?: () => void;
}

const SuccessModal: React.FC<Props> = ({onPress}) => {
  const {Layout, Images, Gutters, Fonts} = useTheme();
  const {mainContainer, dataContainer, imgStyle, mesgText} = styles();
  const {t} = useTranslation(['successModal']);

  return (
    <View style={[Layout.fill, Layout.justifyContentEnd, mainContainer]}>
      <View
        style={[
          Layout.fullWidth,
          Layout.halfHeight,
          Layout.alignItemsCenter,
          dataContainer,
        ]}>
        <Image source={Images.tick} style={[Gutters.largeTMargin, imgStyle]} />
        <Text
          style={[
            Layout.halfWidth,
            Fonts.textCenter,
            Gutters.regularVPadding,
            Fonts.textTiny,
            mesgText,
          ]}>
          {t('successModal:mesg')}
        </Text>
        <CustomButton Title={t('successModal:btnText')} onPress={onPress} />
        <TouchableOpacity
          style={[Layout.halfWidth, Gutters.smallVPadding]}
          activeOpacity={0.9}>
          <Text style={[Fonts.textCenter, Fonts.textTiny, mesgText]}>
            {t('successModal:skipText')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuccessModal;
