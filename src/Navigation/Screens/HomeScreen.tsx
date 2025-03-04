import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamsList} from '../RootNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {ScrollView} from 'react-native-gesture-handler';

type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamsList,
  'Home'
>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProps>();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      <ScrollView style={styles.scrollView}>
        <View style={styles.item}>
          <Button
            title="Go to Stack Navigation"
            onPress={() => {
              navigation.navigate('StackHome');
            }}
          />
        </View>

        <View style={styles.item}>
          <Button
            title="Go to Tab Navigation"
            onPress={() => {
              navigation.navigate('TabDemo');
            }}
          />
        </View>

        <View style={styles.item}>
          <Button
            title="Go to Drawer Navigation"
            onPress={() => {
              navigation.navigate('DrawerDemo');
            }}
          />
        </View>

        <View style={styles.item}>
          <Button
            title="Go to Flat List"
            onPress={() => {
              navigation.navigate('FlatList');
            }}
          />
        </View>

        <View style={styles.item}>
          <Button
            title="Go to TouchScreen"
            onPress={() => {
              navigation.navigate('TouchScreen');
            }}
          />
        </View>

        <View style={styles.item}>
          <Button
            title="Go to ModalScreen"
            onPress={() => {
              navigation.navigate('ModalScreen');
            }}
          />
        </View>

        <View style={styles.item}>
          <Button
            title="Go to PullRefresh"
            onPress={() => {
              navigation.navigate('PullRefresh');
            }}
          />
        </View>

        <View style={styles.item}>
          <Button
            title="Go to Theme"
            onPress={() => {
              navigation.navigate('Theme');
            }}
          />
        </View>

        <View style={styles.item}>
          <Button
            title="Go to Basic Animation"
            onPress={() => {
              navigation.navigate('BasicAnimation');
            }}
          />
        </View>
      </ScrollView>
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
  scrollView: {
    gap: 5,
  },
  item: {
    paddingVertical: 10,
  },
});
