import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function TextInputContainer() {
  const [value, setValue] = React.useState('');

  return (
    <View>
      <TextInput
        placeholder="Enter your name"
        style={styles.input}
        onChangeText={setValue}
        inputMode="email"
      />

      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    margin: 10,
    color: 'red',
  },
});
