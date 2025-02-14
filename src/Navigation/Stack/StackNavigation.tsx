import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import StackHomeScreen from './StackHomeScreen';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StackHome" component={StackHomeScreen} />
    </Stack.Navigator>
  );
}
