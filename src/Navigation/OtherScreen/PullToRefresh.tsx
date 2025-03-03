import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from 'react-native';

const INITIAL_DATA = Array.from({length: 20}, (_, i) => ({
  id: i.toString(),
  title: `Item ${i + 1}`,
}));

export default function PullToRefresh() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [data, setData] = React.useState(INITIAL_DATA);
  const [loading, setLoading] = React.useState(false);

  const loadMoreItem = () => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => {
        const newItems = Array.from({length: 20}, (_, i) => ({
          id: (data.length + i).toString(),
          title: `Item ${data.length + i + 1}`,
        }));

        setData([...data, ...newItems]);
        setLoading(false);
      }, 1000);
    }
  };

  const handelOnRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setData(INITIAL_DATA);
      setRefreshing(false);
    }, 2000);
  };

  return (
    <View>
      <Text>Pull to refresh</Text>

      <FlatList
        data={data}
        renderItem={({item}) => (
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              padding: 10,
              backgroundColor: 'green',
              margin: 10,
              color: 'white',
            }}>
            {item?.title}
          </Text>
        )}
        keyExtractor={item => item.id}
        onEndReachedThreshold={0.1}
        onEndReached={loadMoreItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handelOnRefresh} />
        }
        ListFooterComponent={
          loading ? <ActivityIndicator size={'large'} color={'green'} /> : null
        }
      />
    </View>
  );
}
