import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import TodoItem from './TodoItem';
import {ITodo} from '../types';

interface TodoListProps {
  todoList: ITodo[];
  onDeleteTodo: (id: string) => void;
}

export default function TodoList({todoList, onDeleteTodo}: TodoListProps) {
  return (
    <ScrollView>
      {todoList.map(todo => (
        <TodoItem
          key={todo.id}
          onDelete={() => onDeleteTodo(todo.id)}
          todo={todo}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
