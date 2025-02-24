import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {Text, View} from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerScreen1 = () => {
  return (
    <View>
      <Text>Drawer Screen 1</Text>
    </View>
  );
};

const DrawerScreen2 = () => {
  return (
    <View>
      <Text>Drawer Screen </Text>
    </View>
  );
};

export default function DrawerNavigationDemo() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DrawerScreen1" component={DrawerScreen1} />
      <Drawer.Screen name="DrawerScreen2" component={DrawerScreen2} />
    </Drawer.Navigator>
  );
}
