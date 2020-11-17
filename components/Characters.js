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
});

const elements = [
    <Image
        style={styles.logo}
        source={{
            uri: 'https://i.ibb.co/ckG4Vmb/Group-7.png',
        }}
    />,
    <Image
        style={styles.logo}
        source={{
            uri: 'https://i.ibb.co/FVDW2F9/Bitmap.png',
        }}
    />,
    <Image
        style={styles.dino}
        source={{
            uri: 'https://i.ibb.co/nwmR5Vg/dino.png',
        }}
    />,
    <Image
        style={styles.logo}
        source={{
            uri: 'https://i.ibb.co/Np4MTR2/Group-11.png',
        }}
    />,
    <Image
        style={styles.logo}
        source={{
            uri: 'https://i.ibb.co/ckG4Vmb/Group-7.png',
        }}
    />,
    <Image
        style={styles.logo}
        source={{
            uri: 'https://i.ibb.co/FVDW2F9/Bitmap.png',
        }}
    />,
    <Image
        style={styles.dino}
        source={{
            uri: 'https://i.ibb.co/nwmR5Vg/dino.png',
        }}
    />,
    <Image
        style={styles.logo}
        source={{
            uri: 'https://i.ibb.co/Np4MTR2/Group-11.png',
        }}
    />,
    <Image
        style={styles.logo}
        source={{
            uri: 'https://i.ibb.co/ckG4Vmb/Group-7.png',
        }}
    />,
    <Image
        style={styles.logo}
        source={{
            uri: 'https://i.ibb.co/FVDW2F9/Bitmap.png',
        }}
    />,
    <Image
        style={styles.dino}
        source={{
            uri: 'https://i.ibb.co/nwmR5Vg/dino.png',
        }}
    />,
    <Image
        style={styles.logo}
        source={{
            uri: 'https://i.ibb.co/Np4MTR2/Group-11.png',
        }}
    />
];

const Characters = () => {
    return (
        <DeckSwiper style={styles.logo} components={elements} />
    );
};

export default Characters