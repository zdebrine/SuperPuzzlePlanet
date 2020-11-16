/**
 * @format
 * @flow strict-local
 */
import React, { useEffect, useState } from 'react';
/* import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; */
import {
  Platform,
  Text,
  StatusBar,
} from 'react-native';

import { PERMISSIONS, request } from 'react-native-permissions';

import Onboarding from './screens/Onboarding.js';
import Home from './screens/Home.js';

// const { Connect } = NativeModules;

const App: () => React$Node = () => {

  const [screen, setScreen] = useState('Onboarding');

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
      <StatusBar barStyle="light-content" />
      {screen === "Onboarding" ? (
        <Onboarding setScreen={setScreen} />
      )
        : screen === "Home" ? (
          <Home />
        )
          : (
            <Text>No screen</Text>
          )
      }
    </>
  );
};

export default App;
