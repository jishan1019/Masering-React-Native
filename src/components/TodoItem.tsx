import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ITodo} from '../types';
import TodoEdit from './TodoEdit';

interface TodoItemProps {
  todo: ITodo;
  onDelete: () => void;
  onToggle: () => void;
  onEdit: (newText: string) => void;
}

export default function TodoItem({
  todo,
  onDelete,
  onToggle,
  onEdit,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handelEdit = (newText: string) => {
    onEdit(newText);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <TodoEdit
        todo={todo}
        onSave={handelEdit}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onToggle()} style={styles.todoText}>
        <Text style={[styles.text, todo?.completed && styles.completed]}>
          {todo.text}
        </Text>
      </TouchableOpacity>

      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => setIsEditing(true)}
          style={styles.editBtn}>
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
