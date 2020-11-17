import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Card, Input, Block, Button } from 'galio-framework';

import MapboxGL from "@react-native-mapbox-gl/maps";

import Puzzle from '../components/Puzzle.js';
import PuzzleCreator from '../components/PuzzleCreator.js';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiemRlYnJpbmUiLCJhIjoiY2l5czc3ZTJpMDAwOTMzbGZpYmVkaHRtcyJ9.xh51OlwX5gd23KemtpOReg'
);

const styledMap = 'mapbox://styles/zdebrine/ckdv7d3c31vmq19mq8sxr7bv1';

const ANNOTATION_SIZE = 45;

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
  annotationContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'rgba(0, 0, 0, 0.45)',
    borderRadius: ANNOTATION_SIZE / 2,
    borderWidth: StyleSheet.hairlineWidth,
    height: ANNOTATION_SIZE,
    justifyContent: 'center',
    overflow: 'hidden',
    width: ANNOTATION_SIZE,
  },
});

const Home = () => {

  const [coordinates, setCoordinates] = useState([
    [-105.082101, 39.922742],
    [-73.99155, 40.73681],
  ]);

  const [puzzle, setPuzzle] = useState(null);
  const [puzzleCreator, setPuzzleCreator] = useState(false);

  const onUserMarkerPress = (): void => {
    Alert.alert('You pressed on the user location annotation');
  };

  const createPuzzle = (e): void => {
    setPuzzle(e.geometry.coordinates);
  };

  const openPuzzleCreator = (e): void => {
    setPuzzleCreator(true);
  };

  const openPuzzle = (e): void => {
    setPuzzle(true);
  };

  const closeModal = (): void => {
    setPuzzle(null);
    setPuzzleCreator(false);
  }

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView
          onLongPress={openPuzzleCreator}
          onPress={closeModal}
          style={styles.map}
          styleURL={styledMap}
        >
          <MapboxGL.Camera
            followZoomLevel={15}
            followUserLocation
          />
          <MapboxGL.UserLocation />
          <TouchableOpacity onPress={openPuzzle}>
            <MapboxGL.PointAnnotation
              id={'1'}
              coordinate={coordinates[0]}
              title={'title'}
              ref={(ref) => (this.annotationRef = ref)}>
              <View style={styles.annotationContainer}>
                <Image
                  source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                  style={{ width: ANNOTATION_SIZE, height: ANNOTATION_SIZE }}

                />
              </View>
              <MapboxGL.Callout title="This is a puzzle" />
            </MapboxGL.PointAnnotation>
          </TouchableOpacity>
        </MapboxGL.MapView>
        {puzzle !== null ? (
          <Puzzle />
        ) : puzzleCreator === true ? (
          <PuzzleCreator />
        ) :
            <Text> </Text>
        }
      </View>
    </View>
  );
}

export default Home;