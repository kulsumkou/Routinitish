/* eslint-disable react-hooks/rules-of-hooks */
import {useTheme} from '@/hooks';
import {StyleSheet} from 'react-native';

const styles = () => {
  const {Colors} = useTheme();

  return StyleSheet.create({
    mainContainer: {
      backgroundColor: Colors.modalBg,
    },
    dataContainer: {
      backgroundColor: Colors.btnText,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    },
    imgStyle: {
      width: 60,
      height: 60,
    },
    mesgText: {
      color: Colors.modalMesgText,
    },
  });
};

export default styles;
