import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Colors, Image } from 'react-native';
import { DeckSwiper, Block } from 'galio-framework';

const styles = StyleSheet.create({
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Platform.OS === 'ios' ? 200 : 100,
        height: Platform.OS === 'ios' ? 220 : 110,
    },
    dino: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Platform.OS === 'ios' ? 300 : 150,
        height: Platform.OS === 'ios' ? 220 : 110,
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
            uri: 'https://i.ibb.co/zJxzSK2/image.png',
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
            uri: 'https://i.ibb.co/zJxzSK2/image.png',
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
            uri: 'https://i.ibb.co/zJxzSK2/image.png',
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
            uri: 'https://i.ibb.co/zJxzSK2/image.png',
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
            onSwipeRight={() => characterSelect(this)}
        />
    );
};

export default Characters