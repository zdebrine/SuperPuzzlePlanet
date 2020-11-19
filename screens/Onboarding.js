/**
 * @format
 * @flow strict-local
 */
import React, { useEffect, useState } from 'react';
/* import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; */
import {
  Platform,
  StyleSheet,
  ScrollView,
  View,
  Text,
  NativeModules,
  Image,
  ImageBackground,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import Characters from '../components/Characters';

import { PERMISSIONS, request } from 'react-native-permissions';

const { Connect } = NativeModules;

const styles = StyleSheet.create({
  scrollView: {

  },
  safe: {
    backgroundColor: 'black',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 220,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    marginTop: 0,
    marginBottom: 200,
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  body: {
    backgroundColor: Colors.black,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 48,
    fontFamily: 'GillSans-UltraBold',
    fontWeight: '600',
    color: Colors.white,
    marginBottom: 75,
    marginTop: 150,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

const Onboarding = ({ setScreen, setCharacter }) => {

  request(
    Platform.select({
      android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    }),
  );

  request(
    Platform.select({
      android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      ios: PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL,
    }),
  );

  request(
    Platform.select({
      android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      ios: PERMISSIONS.IOS.LOCATION_ALWAYS,
    }),
  );

  const image = { uri: "https://giphy.com/embed/xT8qBfjJhOmNPTVWU0" };

  return (
    <>
      <ImageBackground source={{ uri: 'https://media.giphy.com/media/xT8qBfjJhOmNPTVWU0/giphy.gif' }} style={{ width: '100%', height: '100%' }}>
        <View
          automaticallyAdjustContentInsets={false}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.container}>
          <View style={styles.container} >
            <Text style={styles.sectionTitle}>Planet Mystery</Text>
            <Characters character={setCharacter} />
            <Text style={styles.text} onPress={() => setScreen("Home")}>TAP TO PLAY</Text>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default Onboarding;
