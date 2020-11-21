import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback, AsyncStorage, ScrollView, Image, Platform } from 'react-native';
import { Card, Input, Block, Button, DeckSwiper } from 'galio-framework';

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        paddingTop: Platform.OS === 'ios' ? 100 : 50,
        paddingBottom: 30,
        padding: 40,
        width: '100%',
        height: '100%',
        bottom: 0,
        right: 0,
        backgroundColor: '#000000',
        opacity: 0.9,
    },
    map: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Platform.OS === 'ios' ? 100 : 50,
        height: Platform.OS === 'ios' ? 100 : 50,
        marginHorizontal: 50,
        marginVertical: 10,
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Platform.OS === 'ios' ? 100 : 50,
        height: Platform.OS === 'ios' ? 120 : 60,
        marginHorizontal: 50,
        marginVertical: 20,
    },
    dino: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Platform.OS === 'ios' ? 200 : 100,
        height: Platform.OS === 'ios' ? 120 : 60,
        marginHorizontal: 50,
        marginVertical: 20,
    },
    sectionTitle: {
        fontSize: 40,
        fontWeight: '600',
        color: 'white',
        marginBottom: 50,
    },
    sectionBody: {
        fontSize: 26,
        fontWeight: '600',
        color: 'white',
        marginBottom: 20,
    },
    caption: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 50,
        marginBottom: 20,
        fontSize: 14,
        fontWeight: '600',
        color: 'grey',
    },
    selected: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 65,
        marginBottom: 20,
        fontSize: 14,
        fontWeight: '600',
        color: 'gold',
    },
    exit: {
        fontSize: 26,
        fontWeight: '600',
        color: 'white',
        marginBottom: 20,
        left: '90%',
    },
});

const Rewards = ({ close, numberSolved, setDefaultCharacter, currentCharacter, setMapView, saveCharacter, saveMap }) => {
    const [character, setCharacter] = useState(currentCharacter);

    const handleSelection = (selectedCharacter) => {
        setCharacter(selectedCharacter[1]);
        saveCharacter(selectedCharacter[0]);
        setDefaultCharacter(selectedCharacter[0]);
    };

    const handleMapSelection = (selectedMap) => {
        setMapView(selectedMap);
        saveMap(selectedMap)
    };

    return (
        <ScrollView style={styles.overlay}>
            <Text style={styles.exit} onPress={close}>
                x
            </Text>
            <Text style={styles.sectionTitle}>Level {numberSolved}</Text>
            <Text style={styles.sectionBody}>Character Select</Text>
            <ScrollView horizontal={true}>
                <TouchableOpacity id='detective' onPress={image => handleSelection(['https://i.ibb.co/ckG4Vmb/Group-7.png', 'detective'])}>
                    <Image
                        id='detective'
                        style={styles.logo}
                        source={{
                            uri: 'https://i.ibb.co/ckG4Vmb/Group-7.png',
                        }}
                    />
                    {character === 'detective' ? (
                        <Text style={styles.selected}>Selected</Text>
                    ) :
                        <></>
                    }
                </TouchableOpacity>
                <TouchableOpacity id='detective' onPress={image => handleSelection(['https://i.ibb.co/FVDW2F9/Bitmap.png', 'ladyDetective'])}>
                    <Image
                        id='lady-detective'
                        style={styles.logo}
                        source={{
                            uri: 'https://i.ibb.co/FVDW2F9/Bitmap.png',
                        }}
                    />
                    {character === 'ladyDetective' ? (
                        <Text style={styles.selected}>Selected</Text>
                    ) :
                        <></>
                    }
                </TouchableOpacity>
                {numberSolved < 12 ? (

                    <TouchableOpacity>
                        <Image
                            id='dino'
                            style={styles.dino}
                            source={{
                                uri: 'https://i.ibb.co/nwmR5Vg/dino.png',
                            }}
                        />
                        <Text style={styles.caption}>Unlock at level 12</Text>
                    </TouchableOpacity>
                ) :
                    <TouchableOpacity onPress={image => handleSelection(['https://i.ibb.co/nwmR5Vg/dino.png', 'dino'])}>
                        <Image
                            id='dino'
                            style={styles.dino}
                            source={{
                                uri: 'https://i.ibb.co/nwmR5Vg/dino.png',
                            }}
                        />
                    </TouchableOpacity>
                }
                {
                    numberSolved < 50 ? (
                        <TouchableOpacity>
                            <Image
                                id='earlybird'
                                style={styles.logo}
                                source={{
                                    uri: 'https://i.ibb.co/zJxzSK2/image.png',
                                }}
                            />
                            <Text style={styles.caption}>Unlock at level 50</Text>
                        </TouchableOpacity>
                    ) :
                        <TouchableOpacity onPress={image => handleSelection(['https://i.ibb.co/zJxzSK2/image.png', 'earlybird'])}>
                            <Image
                                id='earlybird'
                                style={styles.logo}
                                source={{
                                    uri: 'https://i.ibb.co/zJxzSK2/image.png',
                                }}
                            />
                        </TouchableOpacity>
                }
            </ScrollView>
            <Text style={styles.sectionBody}>Map Select</Text>
            <ScrollView horizontal={true}>
                <TouchableOpacity onPress={image => handleMapSelection('mapbox://styles/zdebrine/ckdv7d3c31vmq19mq8sxr7bv1')}>
                    <Image
                        id='default'
                        style={styles.map}
                        source={{
                            uri: 'https://i.ibb.co/jg7v6VH/Screen-Shot-2020-11-19-at-2-10-45-PM.png',
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={image => handleMapSelection('mapbox://styles/zdebrine/ck888x3ap1wsi1imdykm5r22n')}>
                    <Image
                        id='default'
                        style={styles.map}
                        source={{
                            uri: 'https://i.ibb.co/89kBDQn/Screen-Shot-2020-11-19-at-2-11-01-PM.png',
                        }}
                    />
                </TouchableOpacity>
                {numberSolved < 5 ? (
                    <TouchableOpacity>
                        <Image
                            id='dino'
                            style={styles.map}
                            source={{
                                uri: 'https://i.ibb.co/cyKfZds/Screen-Shot-2020-11-19-at-2-10-31-PM.png',
                            }}
                        />
                        <Text style={styles.caption}>Unlock at level 5</Text>
                    </TouchableOpacity>
                ) :
                    <TouchableOpacity onPress={image => handleMapSelection('mapbox://styles/zdebrine/ck9mbtrdd0mrh1inskj4glt71')}>
                        <Image
                            id='dino'
                            style={styles.map}
                            source={{
                                uri: 'https://i.ibb.co/cyKfZds/Screen-Shot-2020-11-19-at-2-10-31-PM.png',
                            }}
                        />
                    </TouchableOpacity>
                }
            </ScrollView>
        </ScrollView>
    );
}
export default Rewards;