import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function TodoInput() {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new todo"
        placeholderTextColor="gray"
        onChangeText={setValue}
      />

      <TouchableOpacity style={styles.addTodoBtn}>
        <Text style={styles.addTodoBtnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cccccc',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 10,
    color: 'gray',
  },
  addTodoBtn: {
    backgroundColor: 'blue',
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTodoBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
