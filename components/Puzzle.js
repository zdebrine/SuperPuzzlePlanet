import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card, Input, Block, Button } from 'galio-framework';

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        width: '100%',
        height: '60%',
        bottom: 280,
        right: 0,
        backgroundColor: '#000000',
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
        marginBottom: 50,
        marginTop: 50,
    },
    submitButton: {
        marginTop: 20,
    },
});

const Puzzle = ({ riddle, title, answer }) => {

    const [userInput, setUserInput] = useState(null);
    const [correct, setCorrect] = useState(false);

    const handleChange = (text) => {
        setUserInput(text.toLowerCase());
    };

    const checkAnswer = () => {
        if (userInput === answer.toLowerCase()) {
            setCorrect(true);
        } else {
            setCorrect(false);
        }
    }

    return (
        <Card
            flex
            borderless
            style={styles.overlay}
        >
            <Text style={styles.sectionTitle}>{title}</Text>
            <Text style={styles.sectionBody}>{riddle}</Text>
            {correct ? (
                <Input onChangeText={(text) => { handleChange(text) }} placeholder="Your answer" color={'green'} style={{ borderColor: 'green' }} placeholderTextColor={'green'} />
            )
                :
                (
                    <Input onChangeText={(text) => { handleChange(text) }} placeholder="Your answer" color={'red'} style={{ borderColor: 'red' }} placeholderTextColor={'red'} />
                )
            }
            <Button style={styles.submitButton} color="primary" onPress={checkAnswer}>SUBMIT</Button>
        </Card>
    );
}
export default Puzzle;