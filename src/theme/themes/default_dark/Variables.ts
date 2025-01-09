import { ThemeNavigationColors } from '../../../../@types/theme';

export const Colors = {
  //app dark colors
  mainBgColor: '#000000',
  regHColor: '#FFFFFF',
  placeHolderColor: 'rgba(99, 103, 127, 1)',
  inputBorder: '#E7E6E6',
  termText: '#63677F',
  greenText: "#2E995C",
  btnBg: '#000',
  btnText: '#FFF',
  googleColor: '#FFFFFF',
  appleColor: '#FFFFFF',
  alreadyColor: '#FFFFFF',
  continueColor: '#FFFFFF',
  modalBg: '#000000',
  modalMesgText: '#1F2436',
  unActiveStep: '#F5F5F5',
  activeStep: 'rgba(250, 250, 250, 0.10)',
  continueBtnBg: 'rgba(250, 250, 250, 0.10)',
  stepTitle: '#FFF',
  timeColor: '#707070',



  //Common or Static Colors
  whiteColor: '#FFFFFF',
  blackColor: '#000000',

  primary: '#7454a5',
  textGray800: '#E0E0E0',
  textGray400: '#969696',
  textGray200: '#BABABA',
  inputBackground: '#3a3a3a',
  circleButtonBackground: '#252732',
};

export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary,
  background: '#1B1A23',
  card: '#1B1A23',
};

export default {
  Colors,
  NavigationColors,
};
