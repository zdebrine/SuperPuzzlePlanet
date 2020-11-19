import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Card, Input, Block, Button, NavBar } from 'galio-framework';

import MapboxGL from "@react-native-mapbox-gl/maps";

import Puzzle from '../components/Puzzle.js';
import PuzzleCreator from '../components/PuzzleCreator.js';
import UserAccount from '../components/UserAccount';
import UserPuzzles from '../components/UserPuzzles';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiemRlYnJpbmUiLCJhIjoiY2l5czc3ZTJpMDAwOTMzbGZpYmVkaHRtcyJ9.xh51OlwX5gd23KemtpOReg'
);

const styledMap = 'mapbox://styles/zdebrine/ckdv7d3c31vmq19mq8sxr7bv1';

const ANNOTATION_SIZE = 70;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: '600',
    color: 'white',
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
    borderColor: 'rgba(0, 0, 0, 0.45)',
    borderRadius: ANNOTATION_SIZE / 2,
    height: ANNOTATION_SIZE,
    justifyContent: 'center',
    overflow: 'hidden',
    width: ANNOTATION_SIZE,
  },
  close: {
    position: 'absolute',
    alignItems: "center",
    width: 40,
    height: 40,
    bottom: 200,
    right: '50%',
    left: '50%'

  },
});

const Home = () => {

  const [zoomLevel, setZoomLevel] = useState(15);
  const [puzzle, setPuzzle] = useState(null);
  const [puzzleCreator, setPuzzleCreator] = useState(false);
  const [accountView, setAccountView] = useState(true);
  const [correct, setCorrect] = useState(false);

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
    setPuzzle(e);
  };

  const closeModal = (): void => {
    setPuzzle(null);
    setPuzzleCreator(false);
    setAccountView(null);
  }

  const openAccount = (): void => {
    setAccountView(true);
  }

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView
          onLongPress={openPuzzleCreator}
          // onPress={closeModal}
          style={styles.map}
          styleURL={styledMap}
        >
          <TouchableOpacity onPress={openAccount}>
            <NavBar left={<Image
              source={{ uri: 'https://i.ibb.co/XLGmZrt/star.png' }}
              style={{ width: 40, height: 40, marginTop: 70 }}
            />}
              transparent={true} />
          </TouchableOpacity>
          <MapboxGL.Camera
            followZoomLevel={zoomLevel}
            followUserLocation
          />
          <MapboxGL.UserLocation onPress={openAccount} />
          {UserPuzzles.map(userPuzzle => (
            <TouchableOpacity onPress={() => { openPuzzle(userPuzzle) }} key={Math.random()} name={userPuzzle}>
              <MapboxGL.PointAnnotation
                id={'1'}
                coordinate={userPuzzle.coordinates}
                title={'title'}
                ref={(ref) => (this.annotationRef = ref)}>
                <View style={styles.annotationContainer}>
                  <Image
                    source={{ uri: 'https://i.ibb.co/GF4vb1m/5215003a6c51a05.png' }}
                    style={{ width: ANNOTATION_SIZE, height: ANNOTATION_SIZE }}
                  />
                </View>
                <MapboxGL.Callout title="This is a puzzle" />
              </MapboxGL.PointAnnotation>
            </TouchableOpacity>
          ))}
        </MapboxGL.MapView>
        {puzzle !== null ? (
          <>
            <Puzzle
              riddle={puzzle.riddle}
              title={puzzle.title}
              answer={puzzle.answer}
              close={closeModal}
              setCorrect={setCorrect}
              correct={correct} />
          </>
        ) : puzzleCreator === true ? (
          <>
            <PuzzleCreator close={closeModal} />
          </>
        ) : accountView !== null ? (
          <>
            <UserAccount close={closeModal} />
          </>
        ) :
              <Text> </Text>
        }
      </View>
    </View>
  );
}

export default Home;