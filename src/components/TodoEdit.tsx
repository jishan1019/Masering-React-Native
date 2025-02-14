import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ITodo} from '../types';

interface TodoEditProps {
  todo: ITodo;
  onSave: (newText: string) => void;
  onCancel: () => void;
}

export default function TodoEdit({todo, onSave, onCancel}: TodoEditProps) {
  const [text, setText] = useState(todo?.text);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor={'gray'}
        placeholder="Enter your todo"
        inputMode="text"
        onChangeText={setText}
        value={text}
      />

      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => onSave(text)} style={styles.editBtn}>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onCancel()} style={styles.editBtn}>
          <Text style={styles.btnText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    color: 'gray',
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  editBtn: {
    backgroundColor: 'blue',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
  },
});
