import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps";

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
    bottom: 50,
    backgroundColor: 'rgba(255, 255, 255, 1)',
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
});

const AnnotationContent = ({ title }) => (
  <View style={styles.touchableContainer}>
    <Text>{title}</Text>
    <TouchableOpacity style={styles.touchable}>
      <Text style={styles.touchableText}>Btn</Text>
    </TouchableOpacity>
  </View>
);

const Home = () => {

  const [coordinates, setCoordinates] = useState([
    [-105.082101, 39.922742],
    [-73.99155, 40.73681],
  ]);

  const [puzzle, setPuzzle] = useState('None');

  const onUserMarkerPress = (): void => {
    Alert.alert('You pressed on the user location annotation');
  };

  const createPuzzle = (): void => {
    setPuzzle('Puzzle 1');
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView
          style={styles.map}
          styleURL={styledMap}
        >
          <MapboxGL.Camera
            followZoomLevel={15}
            followUserLocation
          />
          <MapboxGL.UserLocation onPress={createPuzzle} />
          <MapboxGL.MarkerView coordinate={coordinates[0]}>
            <AnnotationContent title={'this is a marker view'} />
          </MapboxGL.MarkerView>
        </MapboxGL.MapView>
        <TouchableOpacity style={styles.overlay}>
          <Text style={styles.text}>{puzzle}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;