/* eslint-disable no-unused-vars */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import Config from 'react-native-config';
import codePush from 'react-native-code-push';
import JailMonkey from 'jail-monkey';

const App = () => {
  let text = 'Jailed';
  let image = require('./assets/JailNoMonkey.jpg');

  if (JailMonkey.isJailBroken()) {
    text = 'Not Jailed';
    image = require('./assets/JailMonkey.jpg');
  }

  const getUpdate = () => {
    codePush.sync();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Pressable onPress={getUpdate}>
          <Image source={image} style={styles.image} />
        </Pressable>
        <Text style={styles.text}>{text}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#363f2a',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Futura-Medium',
    color: 'gold',
    fontSize: 30,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
});

const codePushOptions = {checkFrequency: codePush.CheckFrequency.MANUAL};
export default codePush(codePushOptions)(App);
