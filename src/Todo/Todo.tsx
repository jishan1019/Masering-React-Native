import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TodoInput from '../components/TodoInput';

export default function Todo() {
  return (
    <View>
      <Text style={styles.headerText}>Todo App</Text>
      <TodoInput />
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
