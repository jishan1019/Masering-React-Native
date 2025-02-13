import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import TextInputContainer from './src/components/TextInput';
import BacisComponent from './src/components/BacisComponent';
import ScrollItem from './src/components/ScrollItem';
import CombineStyle from './src/components/CombineStyle';
import FlexLayout from './src/components/FlexLayout';
import Tuchable from './src/components/Tuchable';
import Todo from './src/Todo/Todo';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={styles.scrollView}>
        <Todo />
        {/* <BacisComponent />
        <TextInputContainer />
        <ScrollItem />
        <CombineStyle />
        <FlexLayout />
        <Tuchable /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollView: {
    padding: 10,
  },
});
