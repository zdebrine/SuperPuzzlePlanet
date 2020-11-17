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
        height: '70%',
        bottom: 200,
        right: 0,
        backgroundColor: '#000000',
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
    submitButton: {
        marginTop: 50,
        marginBottom: 50,
    },
});

const PuzzleCreator = () => {
    return (
        <Card
            flex
            borderless
            style={styles.overlay}
        >
            <Text style={styles.sectionTitle}>New Puzzle</Text>
            <Input placeholder="Puzzle name" color={'grey'} style={styles.inputBody} placeholderTextColor={'grey'} />
            <Input placeholder="Riddle" color={'grey'} style={styles.inputBody} placeholderTextColor={'grey'} />
            <Input placeholder="Answer" color={'grey'} style={styles.inputBody} placeholderTextColor={'grey'} />
            <Button style={styles.submitButton} color="primary">SUBMIT</Button>
        </Card>
    );
}
export default PuzzleCreator;