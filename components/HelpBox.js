import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback, AsyncStorage, Image, ScrollView, platform } from 'react-native';
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
    dino: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 100,
        marginBottom: 40,
        marginTop: 20,
    },
    swiper: {
        position: 'absolute',
        marginTop: 30,
        padding: 40,
        width: '100%',
        height: '100%',
        bottom: 0,
        right: 0,
    },
    sectionTitle: {
        fontSize: 40,
        fontWeight: '600',
        color: 'white',
        marginBottom: 30,
    },
    sectionBody: {
        fontSize: 26,
        fontWeight: '600',
        color: 'white',
        marginBottom: 20,
    },
    submitButton: {
        marginTop: 30,
        marginBottom: 100,
    },
    exit: {
        fontSize: 26,
        fontWeight: '600',
        color: 'white',
        marginBottom: 20,
        left: '90%',
    },
});

const HelpBox = ({ close }) => {

    const [userInput, setUserInput] = useState(null);

    const handleChange = (text) => {
        setUserInput(text.toLowerCase());
    };

    const checkAnswer = () => {
        if (userInput === answer.toLowerCase()) {
            correct.push(id);
            _savePuzzles(correct);
            close();
        }
    }

    return (
        <ScrollView style={styles.overlay}>
            <Text style={styles.exit} onPress={close}>
                x
            </Text>
            <Image
                id='dino'
                style={styles.dino}
                source={{
                    uri: 'https://i.ibb.co/bvjbP37/spplogo.png',
                }}
            />
            <Text style={styles.sectionTitle}>How to play</Text>
            <Text style={styles.sectionBody}>Solve puzzles at different locations</Text>
            <Text style={styles.sectionBody}>Add puzzles to a location by tapping and holding on the map</Text>
        </ScrollView>
    );
}
export default HelpBox;