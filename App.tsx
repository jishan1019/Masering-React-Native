import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import RootNavigator from './src/Navigation/RootNavigator';
import {ThemeProvider} from './src/context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollView: {
    padding: 10,
  },
});
