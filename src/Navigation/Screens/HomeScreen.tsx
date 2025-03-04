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

      <Button
        title="Go to Drawer Navigation"
        onPress={() => {
          navigation.navigate('DrawerDemo');
        }}
      />

      <Button
        title="Go to Flat List"
        onPress={() => {
          navigation.navigate('FlatList');
        }}
      />

      <Button
        title="Go to TouchScreen"
        onPress={() => {
          navigation.navigate('TouchScreen');
        }}
      />

      <Button
        title="Go to ModalScreen"
        onPress={() => {
          navigation.navigate('ModalScreen');
        }}
      />

      <Button
        title="Go to PullRefresh"
        onPress={() => {
          navigation.navigate('PullRefresh');
        }}
      />

      <Button
        title="Go to Theme"
        onPress={() => {
          navigation.navigate('Theme');
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
