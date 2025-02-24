import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import StackHomeScreen from './StackHomeScreen';
import StackScreenTwo from './StackScreenTwo';

export type StackParamsList = {
  StackHome: undefined;
  StackScreen2: {
    itemId: number;
  };
};

const Stack = createStackNavigator<StackParamsList>();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StackHome" component={StackHomeScreen} />
      <Stack.Screen
        name="StackScreen2"
        options={({route}) => ({
          title: `Item ${route.params?.itemId}`,
        })}
        component={StackScreenTwo}
      />
    </Stack.Navigator>
  );
}
