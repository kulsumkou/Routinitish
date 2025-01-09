/* eslint-disable react-hooks/rules-of-hooks */
import {useTheme} from '@/hooks';
import {StyleSheet} from 'react-native';

const styles = () => {
  const {Colors} = useTheme();

  return StyleSheet.create({
    mainContainer: {
      backgroundColor: Colors.mainBgColor,
    },
    CusbtnStyle: {
      backgroundColor: Colors.continueBtnBg,
    },
    applyColor: {
      color: Colors.stepTitle,
    },
    inputStyles: {
      width: 50,
      height: 50,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: Colors.inputBorder,
      textAlign: 'center',
      color: Colors.stepTitle,
    },
    timeColor: {
      color: Colors.timeColor,
    },
    amStyle: {
      width: 34,
      height: 24,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: Colors.inputBorder,
    },
    imgStyle: {
      width: '80%',
      height: 150,
      resizeMode: 'contain',
    },
  });
};

export default styles;
