import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import TodoItem from './TodoItem';
import {ITodo} from '../types';

interface TodoListProps {
  todoList: ITodo[];
  onDeleteTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
  onEditTodo: (id: string, text: string) => void;
}

export default function TodoList({
  todoList,
  onDeleteTodo,
  onToggleTodo,
  onEditTodo,
}: TodoListProps) {
  return (
    <ScrollView>
      {todoList.map(todo => (
        <TodoItem
          key={todo.id}
          onDelete={() => onDeleteTodo(todo.id)}
          onToggle={() => onToggleTodo(todo.id)}
          onEdit={(newText: string) => onEditTodo(todo.id, newText)}
          todo={todo}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
