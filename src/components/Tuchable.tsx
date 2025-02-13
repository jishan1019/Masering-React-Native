import React from 'react';
import {Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';

export default function Tuchable() {
  return (
    <View>
      <Text>Tuchable Components</Text>

      <TouchableOpacity style={{backgroundColor: 'green', padding: 10}}>
        <Text>Touch</Text>
      </TouchableOpacity>

      <TouchableHighlight
        underlayColor={'yellow'}
        style={{backgroundColor: 'red', padding: 10}}>
        <Text>Touchable highlight</Text>
      </TouchableHighlight>
    </View>
  );
}
