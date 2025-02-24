import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackParamsList} from './StackNavigation';

type StackScreen2RouteProp = RouteProp<StackParamsList, 'StackScreen2'>;

export default function StackScreenTwo() {
  const route = useRoute<StackScreen2RouteProp>();

  const navigation = useNavigation();

  return (
    <View>
      <Text>This is screen 2</Text>

      <Text>Item ID: {route.params?.itemId}</Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
