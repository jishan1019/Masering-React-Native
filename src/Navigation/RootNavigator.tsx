import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import StackHomeScreen from './Stack/StackHomeScreen';
import TabNavigationDemo from './Tab/TabNavigationDemo';
import DrawerNavigationDemo from './Drawer/DrawerNavigationDemo';
import FlatListScreen from './OtherScreen/FlatListScreen';
import TuchableScreen from './OtherScreen/TuchableScreen';
import ModalScreen from './OtherScreen/ModalScreen';
import PullToRefresh from './OtherScreen/PullToRefresh';

export type RootStackParamsList = {
  Home: undefined;
  StackHome: undefined;
  TabDemo: undefined;
  DrawerDemo: undefined;
  FlatList: undefined;
  TouchScreen: undefined;
  ModalScreen: undefined;
  PullRefresh: undefined;
};

const Stack = createStackNavigator<RootStackParamsList>();

export default function () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="StackHome" component={StackHomeScreen} />
      <Stack.Screen name="TabDemo" component={TabNavigationDemo} />
      <Stack.Screen name="DrawerDemo" component={DrawerNavigationDemo} />

      <Stack.Screen name="FlatList" component={FlatListScreen} />
      <Stack.Screen name="TouchScreen" component={TuchableScreen} />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen name="PullRefresh" component={PullToRefresh} />
    </Stack.Navigator>
  );
}
