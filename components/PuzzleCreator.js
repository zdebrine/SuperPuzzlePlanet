import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Card, Input, Block, Button, DeckSwiper } from 'galio-framework';

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        marginBottom: 30,
        marginTop: 30,
        padding: 40,
        width: '100%',
        height: '100%',
        bottom: 0,
        right: 0,
        backgroundColor: '#000000',
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
        fontSize: 15,
        fontWeight: '600',
        color: 'white',
        marginBottom: 50,
        marginTop: 0,
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
});

const PuzzleCreator = ({ close }) => {

    const creator = [
        <Card
            flex
            borderless
            style={styles.overlay}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Text style={styles.sectionTitle}>New Puzzle</Text>
            </TouchableWithoutFeedback>
            <Input placeholder="Puzzle name" color={'grey'} style={styles.inputBody} placeholderTextColor={'grey'} />
            <Input
                multiline
                placeholder="Riddle"
                color={'grey'}
                style={styles.riddleBody}
                placeholderTextColor={'grey'}
                maxLength={270}
            />
            <Input placeholder="Answer" color={'grey'} style={styles.inputBody} placeholderTextColor={'grey'} />
            <Button style={styles.submitButton} color="primary">SUBMIT</Button>
        </Card>
    ];

    return (
        <DeckSwiper
            style={styles.swiper}
            components={creator}
            // nextElementStyle={styles.nextElement}
            onSwipeLeft={close}
            onSwipeRight={close}
        />
    );
}
export default PuzzleCreator;