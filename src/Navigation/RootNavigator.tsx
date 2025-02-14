import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import StackHomeScreen from './Stack/StackHomeScreen';

export type RootStackParamsList = {
  Home: undefined;
  StackHome: undefined;
};

const Stack = createStackNavigator<RootStackParamsList>();

export default function () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="StackHome" component={StackHomeScreen} />
    </Stack.Navigator>
  );
}
