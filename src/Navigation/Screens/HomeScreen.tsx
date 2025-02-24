import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamsList} from '../RootNavigator';
import {StackNavigationProp} from '@react-navigation/stack';

type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamsList,
  'Home'
>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProps>();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      <Button
        title="Go to Stack Navigation"
        onPress={() => {
          navigation.navigate('StackHome');
        }}
      />

      <Button
        title="Go to Tab Navigation"
        onPress={() => {
          navigation.navigate('TabDemo');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
