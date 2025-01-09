import React from 'react';
import { Example, Register, RegisterSteps } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Home" component={Example} /> */}
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RegisterSteps" component={RegisterSteps} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
