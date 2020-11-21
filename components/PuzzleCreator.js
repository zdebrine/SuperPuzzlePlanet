import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { Card, Input, Block, Button, DeckSwiper } from 'galio-framework';
import axios from 'axios';

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
        fontSize: 26,
        fontWeight: '600',
        color: 'white',
    },
    sectionBody: {
        fontSize: 26,
        fontWeight: '600',
        color: 'white',
        marginBottom: 20,
    },
    inputBody: {
        marginBottom: 20,
        marginTop: 20,
        borderColor: 'grey',
    },
    riddleBody: {
        height: 100,
        marginBottom: 20,
        marginTop: 20,
        borderColor: 'grey',
    },
    submitButton: {
        marginTop: 50,
        marginBottom: 150,
    },
    exit: {
        fontSize: 26,
        fontWeight: '600',
        color: 'white',
        marginBottom: 20,
        left: '90%',
    },
});

const PuzzleCreator = ({ close, position, username }) => {
    const [title, setTitle] = useState('');
    const [riddle, setRiddle] = useState('');
    const [answer, setAnswer] = useState('');

    const saveNewPuzzle = () => {
        axios.post('http://13.57.8.253:9003/puzzle', {
            coordinates: position,
            title: title,
            riddle: riddle,
            answer: answer,
            creator: username
        })
            .then(close());
    }

    const handleTitle = (text) => {
        setTitle(text);
    }
    const handleRiddle = (text) => {
        setRiddle(text);
    }
    const handleAnswer = (text) => {
        setAnswer(text);
    }


    return (
        <ScrollView style={styles.overlay}>

            <Text style={styles.exit} onPress={close}>
                x
                </Text>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Text style={styles.sectionTitle}>New Puzzle</Text>
            </TouchableWithoutFeedback>
            <Input onChangeText={(text) => { handleTitle(text) }} placeholder="Puzzle name" color={'grey'} style={styles.inputBody} placeholderTextColor={'grey'} />
            <Input
                multiline
                placeholder="Riddle"
                color={'grey'}
                style={styles.riddleBody}
                placeholderTextColor={'grey'}
                maxLength={270}
                onChangeText={(text) => { handleRiddle(text) }}
            />
            <Input onChangeText={(text) => { handleAnswer(text) }} placeholder="Answer" color={'grey'} style={styles.inputBody} placeholderTextColor={'grey'} />
            <Button onPress={event => saveNewPuzzle()} style={styles.submitButton} color="primary">SUBMIT</Button>
        </ScrollView>
    );
}
export default PuzzleCreator;