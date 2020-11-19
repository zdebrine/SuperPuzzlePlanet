import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
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
        marginBottom: 50,
    },
    sectionBody: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
        marginBottom: 20,
    },
    submitButton: {
        marginTop: 30,
        marginBottom: 100,
    },
});

const Puzzle = ({ riddle, title, answer, close, id, setCorrect, correct }) => {

    const [userInput, setUserInput] = useState(null);

    const handleChange = (text) => {
        setUserInput(text.toLowerCase());
    };

    const checkAnswer = () => {
        if (userInput === answer.toLowerCase()) {
            correct.push(id);
            console.log(correct);
            (async () => {
                try {
                    await AsyncStorage.setItem('solvedPuzzles', `${correct}`);
                } catch (error) {
                    console.log(error)
                    // Error saving data
                }
            })();
            close();
        }
    }

    const puzzles = [
        <Card
            flex
            borderless
            style={styles.overlay}
            imageBlockStyle={{ marginTop: 50 }}
            image="https://i.ibb.co/nwmR5Vg/dino.png"
        >
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
        </Card>

    ];

    return (
        <DeckSwiper
            style={styles.swiper}
            components={puzzles}
            // nextElementStyle={styles.nextElement}
            onSwipeLeft={close}
            onSwipeRight={close}
        />
    );
}
export default Puzzle;