import React, {useRef} from 'react';
import {Animated, Button, Easing, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default function BasicAnimation() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateAnim = useRef(new Animated.Value(0)).current;

  const handelFadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const handelFadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const handelTranslate = () => {
    Animated.timing(translateAnim, {
      toValue: 100,
      duration: 1000,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      useNativeDriver: true,
    }).start();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Fade animation */}
      <View style={styles.demoContainer}>
        <Text style={styles.headerText}>Fade Animation</Text>
        <Animated.View
          style={[styles.box, styles.fadeBox, {opacity: fadeAnim}]}
        />

        <View style={styles.btnContainer}>
          <Button onPress={handelFadeIn} title="Fade In" />
          <Button onPress={handelFadeOut} title="Fade Out" />
        </View>
      </View>

      {/* Translate animation */}
      <View style={styles.demoContainer}>
        <Text style={styles.headerText}>Translate Animation</Text>
        <Animated.View
          style={[
            styles.box,
            styles.fadeBox,
            {
              transform: [
                {
                  translateX: translateAnim,
                },
              ],
            },
          ]}
        />

        <Button onPress={handelTranslate} title="Translate" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f0f0f0',
  },

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  demoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },

  btnContainer: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  box: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },

  fadeBox: {
    backgroundColor: 'blue',
  },
});
