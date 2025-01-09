/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { ThemeNavigationColors } from '../../@types/theme';

/**
 * Colors
 */
export const Colors = {
  //app light colors
  mainBgColor: '#F8F7F6',
  regHColor: '#212121',
  placeHolderColor: 'rgba(99, 103, 127, 1)',
  inputBorder: '#E7E6E6',
  termText: '#63677F',
  greenText: "#2E995C",
  btnBg: '#000',
  btnText: '#FFF',
  appleColor: '#000',
  googleColor: '#BB0B0B',
  continueColor: '#000',
  alreadyColor: '#000',
  modalBg: '#F8F7F6',
  modalMesgText: '#1F2436',
  unActiveStep: '#D9D9D9',
  activeStep: '#000000',
  continueBtnBg: '#000000',
  stepTitle: '#1E1E1E',
  timeColor: '#707070',

  //Common or Static Colors
  whiteColor: '#000000',
  blackColor: '#FFFFFF',


  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  //Typography
  textGray800: '#000000',
  textGray400: '#4D4D4D',
  textGray200: '#A1A1A1',
  primary: '#E14032',
  success: '#28a745',
  error: '#dc3545',
  //ComponentColors
  circleButtonBackground: '#E1E1EF',
  circleButtonColor: '#44427D',
};

export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary,
  background: '#EFEFEF',
  card: '#EFEFEF',
};

/**
 * FontSize
 */
export const FontSize = {
  tiny: 14,
  small: 16,
  regular: 20,
  medium: 32,
  large: 40,
};

/**
 * Metrics Sizes
 */
const tiny = 10;
const small = tiny * 2; // 20
const regular = tiny * 3; // 30
const large = regular * 2; // 60
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
};

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
};
