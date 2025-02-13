import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function FlexLayout() {
  return (
    <View style={styles.container}>
      <Text>Layout using flex</Text>

      <Text>Main Axis Row</Text>
      <View style={{flexDirection: 'row', gap: 5}}>
        <View
          style={{flex: 1, backgroundColor: 'red', width: 100, height: 100}}
        />
        <View
          style={{flex: 1, backgroundColor: 'green', width: 100, height: 100}}
        />
        <View
          style={{flex: 1, backgroundColor: 'blue', width: 100, height: 100}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});
