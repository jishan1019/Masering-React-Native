import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import {ITodo} from '../types';

export default function Todo() {
  const [todoList, setTodoList] = React.useState<ITodo[]>([]);

  const addTodo = (text: string) => {
    setTodoList([
      ...todoList,
      {
        id: Date.now().toString(),
        text,
        completed: false,
      },
    ]);
  };

  const deleteTodo = (id: string) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodoList(
      todoList.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    );
  };

  return (
    <View>
      <Text style={styles.headerText}>Todo App</Text>
      <TodoInput onAddTodo={addTodo} />
      <TodoList
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
        todoList={todoList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
