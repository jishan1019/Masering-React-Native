import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

export default function ScrollItem() {
  return (
    <View>
      <Text>Nested Scroll View</Text>
      <ScrollView
        bounces={true}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={true}>
        {[...Array(20)].map((_, index) => (
          <View key={index}>
            <Text>{index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    height: 200,
    backgroundColor: 'gray',
  },

  scrollViewContent: {
    padding: 20,
  },
});
