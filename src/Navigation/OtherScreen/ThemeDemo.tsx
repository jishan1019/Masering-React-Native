import React from 'react';
import {Switch, View} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import {useThemeContext} from '../../context/ThemeContext';

export default function ThemeDemo() {
  const {theme, toggleTheme} = useThemeContext();

  const isDarkMode = theme === 'dark';

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{backgroundColor: isDarkMode ? 'black' : 'white', flex: 1}}>
      <Text>Theme Demo</Text>

      <Switch
        value={isDarkMode}
        onValueChange={toggleTheme}
        trackColor={{true: 'green', false: 'red'}}
      />
    </View>
  );
}
