import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, AsyncStorage, Platform } from 'react-native';
import { Card, Input, Block, Button, NavBar } from 'galio-framework';
import axios from 'axios';

import MapboxGL from "@react-native-mapbox-gl/maps";

import Puzzle from '../components/Puzzle.js';
import PuzzleCreator from '../components/PuzzleCreator';
import UserAccount from '../components/UserAccount';
import DummyUserPuzzles from '../components/UserPuzzles';
import Marker from '../components/Marker';
import Rewards from '../components/Rewards';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiemRlYnJpbmUiLCJhIjoiY2l5czc3ZTJpMDAwOTMzbGZpYmVkaHRtcyJ9.xh51OlwX5gd23KemtpOReg'
);

const characterImage = 'https://i.ibb.co/ckG4Vmb/Group-7.png';

const styledMap = 'mapbox://styles/zdebrine/ckdv7d3c31vmq19mq8sxr7bv1';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginTop: -35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000"
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: '600',
    color: 'white',
  },
  icon: {
    width: 40,
    height: 40,
    marginTop: Platform.OS === 'ios' ? 200 : 15,
  },
  container: {
    zIndex: -1,
    height: Platform.OS === 'ios' ? '100%' : '80%',
    width: '100%',
    backgroundColor: "black"
  },
  map: {
    flex: 1,
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
  const [character, setCharacter] = useState(characterImage);
  const [mapView, setMapView] = useState(styledMap);
  const [puzzle, setPuzzle] = useState(null);
  const [puzzleCreator, setPuzzleCreator] = useState(false);
  const [accountView, setAccountView] = useState(null);
  const [rewardView, setRewardView] = useState(false);
  const [correct, setCorrect] = useState([]);
  const [position, setPosition] = useState(null);
  const [UserPuzzles, setUserPuzzles] = useState(DummyUserPuzzles);

  useEffect(() => {
    axios.get('http://13.57.8.253:9003/puzzle')
      .then((response) => {
        setUserPuzzles(response.data);
      })
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem('solvedPuzzles');
        if (value !== null) {
          let solvedArray = []
          value.split(',').forEach(id => solvedArray.push(id));
          setCorrect(solvedArray);
        }
      } catch (error) {
        // Error retrieving data
        console.log(error)
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem('character');
        if (value !== null) {
          setCharacter(value);
        }
      } catch (error) {
        // Error retrieving data
        console.log(error)
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem('map');
        if (value !== null) {
          console.log('here', value);
          setMapView(value);
        }
      } catch (error) {
        // Error retrieving data
        console.log(error)
      }
    })();
  }, []);

  const _saveMap = async (selectedMap) => {
    try {
      await AsyncStorage.setItem('map', `${selectedMap}`);
    } catch (error) {
      console.log(error)
      // Error saving data
    }
  }

  const _savePuzzles = async (solved) => {
    try {
      await AsyncStorage.setItem('solvedPuzzles', `${solved}`);
    } catch (error) {
      console.log(error)
      // Error saving data
    }
  }

  const _saveCharacter = async (selectedCharacter) => {
    try {
      await AsyncStorage.setItem('character', `${selectedCharacter}`);
      console.log(selectedCharacter);
    } catch (error) {
      console.log(error)
      // Error saving data
    }
  }

  const createPuzzle = (e): void => {
    setPuzzle(e.geometry.coordinates);
  };

  const openPuzzleCreator = (e): void => {
    setPosition(e.geometry.coordinates);
    setPuzzleCreator(true);
  };

  const closeModal = (): void => {
    setPuzzle(null);
    setPuzzleCreator(false);
    setAccountView(null);
    setRewardView(false);
    setPosition(null);
  }

  const openAccount = (): void => {
    setAccountView(true);
  }

  const openRewards = (): void => {
    setRewardView(true);
  }

  return (
    <View style={styles.page}>
      <NavBar left={
        <>
          <TouchableOpacity onPress={openAccount}>
            <Image
              source={{ uri: 'https://i.ibb.co/1mCS6GS/settings.png' }}
              style={styles.icon}
            />
          </TouchableOpacity>
        </>
      }
        title={
          <>
            <TouchableOpacity onPress={openRewards}>
              <Image
                source={{ uri: 'https://i.ibb.co/LZx43xX/star.png' }}
                style={styles.icon}
              />
            </TouchableOpacity>
          </>
        }
        transparent={true} />
      <View style={styles.container}>
        <MapboxGL.MapView
          onLongPress={e => { openPuzzleCreator(e) }}
          // onPress={closeModal}
          style={styles.map}
          styleURL={mapView}
        >
          <MapboxGL.Camera
            followZoomLevel={zoomLevel}
            followUserLocation
          />
          {/* {UserPuzzles.map(userPuzzle => ( */}
          <Marker correct={correct} userPuzzles={UserPuzzles} setPuzzle={setPuzzle} />
          {/* ))} */}
          <MapboxGL.UserLocation onPress={openAccount} />
        </MapboxGL.MapView>
      </View>
      {puzzle !== null ? (
        <>
          <Puzzle
            id={puzzle._id}
            riddle={puzzle.riddle}
            title={puzzle.title}
            answer={puzzle.answer}
            close={closeModal}
            setCorrect={setCorrect}
            correct={correct}
            _savePuzzles={_savePuzzles}
          />
        </>
      ) : puzzleCreator === true ? (
        <>
          <PuzzleCreator close={closeModal} position={position} username='IggyBiggums' />
        </>
      ) : accountView !== null ? (
        <>
          <UserAccount close={closeModal} numberSolved={correct.length} character={character} />
        </>
      ) : rewardView !== false ? (
        <>
          <Rewards
            close={closeModal}
            numberSolved={correct.length}
            setDefaultCharacter={setCharacter}
            currentCharacter={character}
            setMapView={setMapView}
            saveCharacter={_saveCharacter}
            saveMap={_saveMap}
          />
        </>
      ) :
              <Text> </Text>
      }
    </View>
  );
}

export default Home;