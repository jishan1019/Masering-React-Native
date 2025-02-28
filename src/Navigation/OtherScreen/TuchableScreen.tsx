import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default function TuchableScreen() {
  return (
    <View>
      <Text>Tuchable Screen</Text>

      <TouchableWithoutFeedback>
        <Text style={styles.btn}>Click here</Text>
      </TouchableWithoutFeedback>

      <TouchableOpacity>
        <Text style={styles.btn}>Click here</Text>
      </TouchableOpacity>

      <TouchableHighlight>
        <Text style={styles.btn}>Click here</Text>
      </TouchableHighlight>

      <Pressable
        style={({pressed}) => [
          styles.btn,
          {
            backgroundColor: pressed ? 'red' : 'green',
          },
        ]}>
        {({pressed}) => <Text>{pressed ? 'Presing.....' : 'Press here'}</Text>}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'green',
    width: 'auto',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    margin: 10,
  },
});
