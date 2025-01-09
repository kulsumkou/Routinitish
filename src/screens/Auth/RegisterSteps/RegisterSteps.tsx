import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@/hooks';
import styles from './styles';
import {CustomButton, StepIndicator} from '@/components';
import {useTranslation} from 'react-i18next';
import SetGoals from './SetGoals';
import SetWakeUpTime from './SetWakeUpTime';
import SetSleepTime from './SetSleepTime';
import SetMoodCheckTime from './SetMoodCheckTime';
import SetAllowNotification from './SetAllowNotification';

const RegisterSteps = () => {
  const {t} = useTranslation(['registerFirstStep']);
  const {Layout, Gutters, Fonts} = useTheme();
  const {mainContainer, CusbtnStyle, applyColor} = styles();
  const [activeStep, setActiveStep] = useState(0);
  const [textFHH, setTextFHH] = useState('');
  const [textFMM, setTextFMM] = useState('');
  const [textSHH, setTextSHH] = useState('');
  const [textSMM, setTextSMM] = useState('');
  const [textTHH, setTextTHH] = useState('');
  const [textTMM, setTextTMM] = useState('');
  const [isSelected, setIsSelected] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  });

  console.log(
    'Printing All States',
    textFHH,
    textFMM,
    textSHH,
    textSMM,
    textTHH,
    textTMM,
    isSelected,
  );

  return (
    <View style={[Layout.fill, mainContainer]}>
      <View style={[Gutters.regularHPadding, Gutters.smallTMargin]}>
        <StepIndicator activeStep={activeStep} />
      </View>
      <Text
        style={[
          Fonts.textCenter,
          Fonts.textSmall,
          applyColor,
          Gutters.largeTMargin,
        ]}>
        {t('registerFirstStep:title')}
      </Text>

      {activeStep === 0 && (
        <SetGoals isSelected={isSelected} setSelection={setIsSelected} />
      )}
      {activeStep === 1 && (
        <SetWakeUpTime
          onTextHHChange={e => setTextFHH(e)}
          onTextMMChange={e => setTextFMM(e)}
        />
      )}
      {activeStep === 2 && (
        <SetSleepTime
          onTextHHChange={e => setTextSHH(e)}
          onTextMMChange={e => setTextSMM(e)}
        />
      )}
      {activeStep === 3 && (
        <SetMoodCheckTime
          onTextHHChange={e => setTextTHH(e)}
          onTextMMChange={e => setTextTMM(e)}
        />
      )}
      {activeStep === 4 && <SetAllowNotification />}

      <View style={[Gutters.largeVMargin]} />
      <CustomButton
        Title={activeStep <= 3 ? 'Continue' : 'Allow'}
        onPress={() => setActiveStep(activeStep + 1)}
        cusStyles={CusbtnStyle}
      />
      {activeStep > 0 && (
        <CustomButton
          Title={activeStep <= 3 ? 'Skip' : 'Don’t allow'}
          onPress={() => console.log('skip')}
          cusStyles={{backgroundColor: 'transparent'}}
        />
      )}
    </View>
  );
};

export default RegisterSteps;
