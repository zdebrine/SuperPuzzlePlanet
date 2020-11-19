import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback, AsyncStorage, ScrollView, Image } from 'react-native';
import { Card, Input, Block, Button, DeckSwiper } from 'galio-framework';

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        paddingTop: 100,
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
        width: 200,
        height: 200,
        marginHorizontal: 50,
        marginVertical: 10,
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 120,
        marginHorizontal: 50,
        marginVertical: 20,
    },
    dino: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 120,
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
        marginTop: -40,
        marginBottom: 10,
        left: 300,
    },
});

const Rewards = ({ close, numberSolved }) => {
    const [character, setCharacter] = useState('detective');
    /* const [username, setUsername] = useState('wormy');

    useEffect(() => {
        (async () => {
            try {
                const value = await AsyncStorage.getItem('username');
                if (value !== null) {
                    setUsername(value);
                }
            } catch (error) {
                // Error retrieving data
                console.log(error)
            }
        })();
    }, []); */

    /* const _saveUser = async () => {
        try {
            await AsyncStorage.setItem('username', `${username}`);
            close();
        } catch (error) {
            console.log(error)
            // Error saving data
        }
    } */

    const handleSelection = (selectedCharacter) => {
        setCharacter(selectedCharacter);
    };

    return (
        <ScrollView style={styles.overlay}>
            <TouchableOpacity style={styles.exit} onPress={close}>
                <Text style={styles.sectionBody}>
                    x
                </Text>
            </TouchableOpacity>
            <Text style={styles.sectionTitle}>Level {numberSolved}</Text>
            <Text style={styles.sectionBody}>Character Select</Text>
            <ScrollView horizontal={true}>
                <TouchableOpacity id='detective' onPress={image => handleSelection('detective')}>
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
                <TouchableOpacity id='detective' onPress={image => handleSelection('ladyDetective')}>
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
            </ScrollView>
            <Text style={styles.sectionBody}>Map Select</Text>
            <ScrollView horizontal={true}>
                <TouchableOpacity id='detective' onPress={image => handleSelection('detective')}>
                    <Image
                        id='detective'
                        style={styles.map}
                        source={{
                            uri: 'https://i.ibb.co/89kBDQn/Screen-Shot-2020-11-19-at-2-11-01-PM.png',
                        }}
                    />
                </TouchableOpacity>
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
            </ScrollView>
        </ScrollView>
    );
}
export default Rewards;