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
        width: 150,
        height: 110,
        marginBottom: 20,
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

const Puzzle = ({ riddle, title, answer, close, id, setCorrect, correct, _savePuzzles }) => {

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
                    uri: 'https://i.ibb.co/nwmR5Vg/dino.png',
                }}
            />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Text style={styles.sectionTitle}>{title}</Text>
            </TouchableWithoutFeedback>
            <Text style={styles.sectionBody}>{riddle}</Text>
            {correct.includes(id) ? (
                <Input disabled onChangeText={(text) => { handleChange(text) }} placeholder="SOLVED" color={'green'} style={{ borderColor: 'green' }} placeholderTextColor={'green'} />
            )
                :
                (
                    <Input onChangeText={(text) => { handleChange(text) }} placeholder="Your answer" color={'red'} style={{ borderColor: 'red' }} placeholderTextColor={'red'} />
                )
            }
            <Button style={styles.submitButton} color="primary" onPress={checkAnswer}>SUBMIT</Button>
        </ScrollView>
    );
}
export default Puzzle;