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

const Puzzle = () => {
    return (
        <Card
            flex
            borderless
            style={styles.overlay}
        >
            <Text style={styles.sectionTitle}>Iggy's Puzzle</Text>
            <Text style={styles.sectionBody}>I rest my legs and to the right, a plate of bronze is in my site. Founded here, you will see, the answer to fill you with glee</Text>
            <Input placeholder="Your answer" color={'grey'} style={{ borderColor: 'grey' }} placeholderTextColor={'grey'} />
            <Button style={styles.submitButton} color="primary">SUBMIT</Button>
        </Card>
    );
}
export default Puzzle;