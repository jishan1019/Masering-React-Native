import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

type TFlatItem = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export default function FlatListScreen() {
  const [data, setData] = React.useState<TFlatItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log({data});

  return (
    <View>
      <Text>Flat list example</Text>

      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View style={styles.cardItem}>
              <Text>id: {item?.id}</Text>
              <Text>Title: {item?.title}</Text>
              <Text>Des: {item?.body}</Text>
            </View>
          );
        }}
        keyExtractor={item => item?.id?.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardItem: {
    margin: 10,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    borderColor: 'black',
    gap: 10,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
});
