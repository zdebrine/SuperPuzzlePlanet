import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps";

import flag from '../assets/flag.png';
import mysteryBox from '../assets/mystery-box.png';


const ANNOTATION_SIZE = 70;

const styles = StyleSheet.create({
    annotationContainer: {
        alignItems: 'center',
        borderColor: 'rgba(0, 0, 0, 0.45)',
        borderRadius: ANNOTATION_SIZE / 2,
        height: ANNOTATION_SIZE,
        justifyContent: 'center',
        overflow: 'hidden',
        width: ANNOTATION_SIZE,
    },
});


const Marker = ({ userPuzzles, correct, setPuzzle }) => {

    const featureCollection: GeoJSON.FeatureCollection = {
        type: 'FeatureCollection',
        features: userPuzzles.map(userPuzzle => (
            {
                type: 'Feature',
                id: JSON.stringify(userPuzzle),
                properties: {
                    icon: correct.includes(userPuzzle._id) ? 'flag' : 'mysteryBox',
                },
                geometry: {
                    type: 'Point',
                    coordinates: userPuzzle.coordinates,
                },
            }
        )
        )
    };

    const openPuzzle = (e): void => {
        const tappedPuzzle = (JSON.parse(e.features[0].id));
        setPuzzle(tappedPuzzle);
    };

    return (
        <>
            <MapboxGL.Images images={{ mysteryBox: mysteryBox, flag: flag }} />
            <MapboxGL.ShapeSource
                id="symbolLocationSource"
                hitbox={{ width: 30, height: 30 }}
                shape={featureCollection}
                onPress={e => openPuzzle(e)}
            >
                <MapboxGL.SymbolLayer
                    id="BuildingIcon"
                    style={{
                        iconImage: ['get', 'icon'],
                        iconSize: 1,
                        iconAllowOverlap: true
                    }}
                />
            </MapboxGL.ShapeSource>
        </>
    )
}

export default Marker;

/* const ANNOTATION_SIZE = 70;

const styles = StyleSheet.create({
    annotationContainer: {
        alignItems: 'center',
        borderColor: 'rgba(0, 0, 0, 0.45)',
        borderRadius: ANNOTATION_SIZE / 2,
        height: ANNOTATION_SIZE,
        justifyContent: 'center',
        overflow: 'hidden',
        width: ANNOTATION_SIZE,
    },
});


const Marker = ({ userPuzzle, correct, setPuzzle }) => {

    const openPuzzle = (tappedPuzzle): void => {
        setPuzzle(tappedPuzzle);
    };

    return (
        <TouchableOpacity onPress={() => { openPuzzle(userPuzzle) }} key={userPuzzle.id} name={userPuzzle}>
            <MapboxGL.PointAnnotation
                id={`${userPuzzle.id}`}
                coordinate={userPuzzle.coordinates}
                title={'title'}
            >
                <View style={styles.annotationContainer}>
                    {
                        correct.includes(userPuzzle._id) ? (
                            <Image
                                source={{ uri: 'https://i.ibb.co/DWXDJZ4/unnamed-1.png' }}
                                style={{ width: ANNOTATION_SIZE, height: ANNOTATION_SIZE }}
                            />
                        )
                            :
                            <Image
                                source={{ uri: 'https://i.ibb.co/GF4vb1m/5215003a6c51a05.png' }}
                                style={{ width: ANNOTATION_SIZE, height: ANNOTATION_SIZE }}
                            />
                    }
                </View>
                <MapboxGL.Callout title={`${userPuzzle.title}`} />
            </MapboxGL.PointAnnotation>
        </TouchableOpacity>
    )
}

export default Marker; */