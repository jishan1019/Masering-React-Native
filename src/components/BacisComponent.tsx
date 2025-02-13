import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import img from '../../assets/image.png';

export default function BacisComponent() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <View style={styles.rootContainer}>
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
      </View>

      <Text style={styles.nestedRoot}>
        This is nested text <Text style={styles.nestedItem}>Nested</Text>
      </Text>

      <Image
        style={styles.img}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBH4hnVpzxDGE12CGGlg_eI9JyD8vmp6X6Wg&s',
        }}
      />

      <Image style={styles.img} source={img} />

      <Button
        color={'red'}
        title="Press me"
        onPress={() => setCount(count + 1)}
      />

      <Text>Count Is: {count}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  rootContainer: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  item: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },

  nestedRoot: {
    fontSize: 20,
  },

  nestedItem: {
    fontWeight: 'bold',
  },

  img: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});
