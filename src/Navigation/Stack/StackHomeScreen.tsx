import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, View} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import {StackParamsList} from './StackNavigation';

type StackScreen1NavProps = StackNavigationProp<StackParamsList, 'StackHome'>;

export default function StackHomeScreen() {
  const navigation = useNavigation<StackScreen1NavProps>();

  return (
    <View>
      <Text>Stack Home Screen</Text>

      <Button
        title="Go To stack screen two"
        onPress={() => navigation.navigate('StackScreen2', {itemId: 100})}
      />
    </View>
  );
}
