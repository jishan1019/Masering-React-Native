import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import StackHomeScreen from './Stack/StackHomeScreen';
import TabNavigationDemo from './Tab/TabNavigationDemo';
import DrawerNavigationDemo from './Drawer/DrawerNavigationDemo';

export type RootStackParamsList = {
  Home: undefined;
  StackHome: undefined;
  TabDemo: undefined;
  DrawerDemo: undefined;
};

const Stack = createStackNavigator<RootStackParamsList>();

export default function () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="StackHome" component={StackHomeScreen} />
      <Stack.Screen name="TabDemo" component={TabNavigationDemo} />
      <Stack.Screen name="DrawerDemo" component={DrawerNavigationDemo} />
    </Stack.Navigator>
  );
}
