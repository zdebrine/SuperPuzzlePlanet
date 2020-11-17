import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card, Input, Block, Button } from 'galio-framework';

import MapboxGL from "@react-native-mapbox-gl/maps";

import Puzzle from '../components/Puzzle.js';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiemRlYnJpbmUiLCJhIjoiY2l5czc3ZTJpMDAwOTMzbGZpYmVkaHRtcyJ9.xh51OlwX5gd23KemtpOReg'
);

const styledMap = 'mapbox://styles/zdebrine/ckdv7d3c31vmq19mq8sxr7bv1';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: "black"
  },
  map: {
    flex: 1
  },
  overlay: {
    position: 'absolute',
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    width: '100%',
    height: '60%',
    bottom: 280,
    right: 0,
    backgroundColor: '#000000',
  },
  touchableContainer: { borderColor: 'black', borderWidth: 1.0, width: 60 },
  touchable: {
    backgroundColor: 'blue',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableText: {
    color: 'white',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: '600',
    color: 'white',
  },
  sectionBody: {
    fontSize: 26,
    fontWeight: '600',
    color: 'white',
    marginBottom: 50,
    marginTop: 50,
  },
  submitButton: {
    marginTop: 20,
  },
});

const Home = () => {

  const [coordinates, setCoordinates] = useState([
    [-105.082101, 39.922742],
    [-73.99155, 40.73681],
  ]);

  const [puzzle, setPuzzle] = useState(null);

  const onUserMarkerPress = (): void => {
    Alert.alert('You pressed on the user location annotation');
  };

  const createPuzzle = (e): void => {
    setPuzzle(e.geometry.coordinates);
  };

  const openPuzzle = (e): void => {
    setPuzzle(e.geometry.coordinates);
  };

  const closeModal = (): void => {
    setPuzzle(null);
  }

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView
          onPress={puzzle === null ? createPuzzle : closeModal}
          style={styles.map}
          styleURL={styledMap}
        >
          <MapboxGL.Camera
            followZoomLevel={15}
            followUserLocation
          />
          <MapboxGL.UserLocation />
          <MapboxGL.MarkerView coordinate={coordinates[0]}>
            <MapboxGL.PointAnnotation coordinate={coordinates[0]} onPress={openPuzzle} />
          </MapboxGL.MarkerView>
        </MapboxGL.MapView>
        {puzzle !== null ? (
          <Puzzle />
        ) :
          <Text> </Text>
        }
      </View>
    </View>
  );
}

export default Home;