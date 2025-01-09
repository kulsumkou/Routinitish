/* eslint-disable react-hooks/rules-of-hooks */
import {useTheme} from '@/hooks';
import {StyleSheet} from 'react-native';

const styles = () => {
  const {Colors} = useTheme();

  return StyleSheet.create({
    mainContainer: {
      backgroundColor: Colors.modalBg,
    },
    stepView: {
      width: '15%',
      height: 6,
      borderRadius: 5,
      backgroundColor: Colors.unActiveStep,
    },
    activeStyle: {
      backgroundColor: Colors.activeStep,
    },
  });
};

export default styles;
