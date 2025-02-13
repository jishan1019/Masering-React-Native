import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ITodo} from '../types';

interface TodoItemProps {
  todo: ITodo;
  onDelete: () => void;
}

export default function TodoItem({todo, onDelete}: TodoItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.todoText}>
        <Text style={[styles.text, todo?.completed && styles.completed]}>
          {todo.text}
        </Text>
      </TouchableOpacity>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.btnText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onDelete} style={styles.editBtn}>
          <Text style={styles.btnText}>Delete</Text>
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
  todoText: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
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
