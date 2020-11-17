import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Colors, Image } from 'react-native';
import { DeckSwiper, Block } from 'galio-framework';

const styles = StyleSheet.create({
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 220,
    },
    dino: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 220,
    },
    nextElement: {
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0,
    },
});

const elements = [
    <Image
        id='detective'
        style={styles.logo}
        source={{
            uri: 'https://i.ibb.co/ckG4Vmb/Group-7.png',
        }}
    />,
    <Image
        id='lady-detective'
        style={styles.logo}
        source={{
            uri: 'https://i.ibb.co/FVDW2F9/Bitmap.png',
        }}
    />,
    <Image
        id='dino'
        style={styles.dino}
        source={{
            uri: 'https://i.ibb.co/nwmR5Vg/dino.png',
        }}
    />,
    <Image
        id='earlybird'
        style={styles.logo}
        source={{
            uri: 'https://i.ibb.co/Np4MTR2/Group-11.png',
        }}
    />,
    <Image
        id='detective'
        style={styles.logo}
        source={{
            uri: 'https://i.ibb.co/ckG4Vmb/Group-7.png',
        }}
    />,
    <Image
        id='lady-detective'
        style={styles.logo}
        source={{
            uri: 'https://i.ibb.co/FVDW2F9/Bitmap.png',
        }}
    />,
    <Image
        id='dino'
        style={styles.dino}
        source={{
            uri: 'https://i.ibb.co/nwmR5Vg/dino.png',
        }}
    />,
    <Image
        id='earlybird'
        style={styles.logo}
        source={{
            uri: 'https://i.ibb.co/Np4MTR2/Group-11.png',
        }}
    />,
    <Image
        id='detective'
        style={styles.logo}
        source={{
            uri: 'https://i.ibb.co/ckG4Vmb/Group-7.png',
        }}
    />,
    <Image
        id='lady-detective'
        style={styles.logo}
        source={{
            uri: 'https://i.ibb.co/FVDW2F9/Bitmap.png',
        }}
    />,
    <Image
        id='dino'
        style={styles.dino}
        source={{
            uri: 'https://i.ibb.co/nwmR5Vg/dino.png',
        }}
    />,
    <Image
        id='earlybird'
        style={styles.logo}
        source={{
            uri: 'https://i.ibb.co/Np4MTR2/Group-11.png',
        }}
    />,
    <Image
        id='detective'
        style={styles.logo}
        source={{
            uri: 'https://i.ibb.co/ckG4Vmb/Group-7.png',
        }}
    />,
    <Image
        id='lady-detective'
        style={styles.logo}
        source={{
            uri: 'https://i.ibb.co/FVDW2F9/Bitmap.png',
        }}
    />,
    <Image
        id='dino'
        style={styles.dino}
        source={{
            uri: 'https://i.ibb.co/nwmR5Vg/dino.png',
        }}
    />,
    <Image
        id='earlybird'
        style={styles.logo}
        source={{
            uri: 'https://i.ibb.co/Np4MTR2/Group-11.png',
        }}
    />,

];

const Characters = ({ setCharacter }) => {

    const characterSelect = (e) => {
        console.log(e);
    }

    return (
        <DeckSwiper
            style={styles.logo}
            components={elements}
            nextElementStyle={styles.nextElement}
            onSwipeLeft={characterSelect}
            onSwipeRight={characterSelect}
        />
    );
};

export default Characters