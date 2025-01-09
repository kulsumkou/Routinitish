import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@/hooks';
import styles from './styles';

interface StepIndicatorProps {
  activeStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({activeStep}) => {
  const {Layout, Gutters} = useTheme();
  const {stepView, activeStyle} = styles();

  return (
    <View
      style={[
        Layout.row,
        Layout.alignItemsCenter,
        Layout.justifyContentBetween,
      ]}>
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <View
            key={i}
            style={[
              stepView,
              Gutters.smallRMargin,
              activeStep >= i && activeStyle,
            ]}
          />
        ))}
    </View>
  );
};

export default StepIndicator;
