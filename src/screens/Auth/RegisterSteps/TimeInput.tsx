import React, {useRef, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useTheme} from '@/hooks';
import styles from './styles';
import DatePicker from 'react-native-date-picker';

interface TimeInputProps {
  onPress?: () => void;
  onChangeHH: (text: string) => void;
  onChangeMM: (text: string) => void;
}

const TimeInput: React.FC<TimeInputProps> = ({
  onPress,
  onChangeHH,
  onChangeMM,
}) => {
  const {Layout, Gutters, Fonts, Colors} = useTheme();
  const {inputStyles, timeColor, amStyle} = styles();
  const mmInputRef = useRef<TextInput | null>(null);
  const [date, setDate] = useState(new Date());

  const handleHourChange = (text: string) => {
    text = text.replace(/[^0-9]/g, '');

    if (text !== '') {
      const num = parseInt(text, 10);
      if (num < 1) {
        text = '01';
      } else if (num > 12) {
        text = '12';
      } else if (num < 10) {
        text = '0' + num;
      }
    }
    onChangeHH(text);

    if (text.length === 2) {
      // mmInputRef.current?.focus();
    }
  };

  const handleMinuteChange = (text: string) => {
    text = text.replace(/[^0-9]/g, '');

    if (text !== '') {
      const num = parseInt(text, 10);
      if (num < 10) {
        text = '0' + num;
      } else if (num > 59) {
        text = '59';
      }
    }

    onChangeMM(text);
  };

  return (
    <View
      style={[
        Layout.row,
        Layout.alignItemsCenter,
        Layout.justifyContentCenter,
        Gutters.largeVMargin,
      ]}>
      <DatePicker
        date={date}
        onDateChange={setDate}
        mode="time"
        style={{backgroundColor: 'black', borderWidth: 2, borderColor: 'red'}}
      />
      <View
        style={[
          Layout.row,
          Layout.alignItemsCenter,
          Layout.justifyContentCenter,
        ]}>
        <TextInput
          maxLength={2}
          placeholder="10"
          keyboardType="number-pad"
          style={[Fonts.textMedium, inputStyles]}
          placeholderTextColor={Colors.stepTitle}
          onChangeText={handleHourChange}
        />
        <Text style={[Gutters.tinyHPadding, timeColor]}>hh</Text>
      </View>
      <View
        style={[
          Layout.row,
          Layout.alignItemsCenter,
          Layout.justifyContentCenter,
        ]}>
        <TextInput
          ref={mmInputRef}
          maxLength={2}
          placeholder="56"
          keyboardType="number-pad"
          style={[Fonts.textMedium, inputStyles]}
          placeholderTextColor={Colors.stepTitle}
          onChangeText={handleMinuteChange}
        />
        <Text style={[Gutters.tinyHPadding, timeColor]}>mm</Text>
      </View>
      <View>
        <TouchableOpacity
          style={[
            Layout.alignItemsCenter,
            Layout.justifyContentCenter,
            Gutters.smallBMargin,
            amStyle,
          ]}
          onPress={onPress}>
          <Text>AM</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Layout.alignItemsCenter,
            Layout.justifyContentCenter,
            amStyle,
          ]}
          onPress={onPress}>
          <Text>PM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TimeInput;
