import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function CombineStyle() {
  return (
    <View style={[styles.container, {borderColor: 'red'}]}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestias
        reprehenderit quod, minima nihil quis fugiat hic alias cum rerum,
        recusandae, repudiandae illum ipsum eius qui dolorum vero. Incidunt,
        quo!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'yellow',
  },
});
