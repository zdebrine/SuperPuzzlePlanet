import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback, AsyncStorage, ScrollView, Image, Platform } from 'react-native';
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
    character: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Platform.OS === 'ios' ? '70%' : '20%',
        height: Platform.OS === 'ios' ? '30%' : '15%',
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
        marginBottom: Platform.OS === 'ios' ? 50 : 20,
    },
    sectionBody: {
        fontSize: 26,
        fontWeight: '600',
        color: 'white',
        marginBottom: Platform.OS === 'ios' ? 20 : 10,
    },
    inputBody: {
        marginBottom: 20,
        marginTop: 20,
        borderColor: 'grey',
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

const UserAccount = ({ close, numberSolved, character }) => {
    const [username, setUsername] = useState('wormy');

    useEffect(() => {
        (async () => {
            try {
                const value = await AsyncStorage.getItem('username');
                if (value !== null) {
                    setUsername(value);
                }
            } catch (error) {
                // Error retrieving data
                console.log(error)
            }
        })();
    }, []);

    const _saveUser = async () => {
        try {
            await AsyncStorage.setItem('username', `${username}`);
            close();
        } catch (error) {
            console.log(error)
            // Error saving data
        }
    }

    const handleChange = (text) => {
        setUsername(text);
    };

    return (
        <ScrollView style={styles.overlay}>
            <Text style={styles.exit} onPress={close}>
                x
                </Text>
            <Image
                id='dino'
                style={styles.character}
                source={{
                    uri: `${character}`,
                }}
            />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Text style={styles.sectionTitle}>Hi, {username}</Text>
            </TouchableWithoutFeedback>
            <Text style={styles.sectionBody}>Puzzles Solved: {numberSolved}</Text>
            <Text style={styles.sectionBody}>Change Name</Text>
            <Input onChangeText={(text) => { handleChange(text) }} placeholder="username" color={'grey'} style={styles.inputBody} placeholderTextColor={'grey'} />
            <Button style={styles.submitButton} color="primary" onPress={_saveUser}>SUBMIT</Button>
        </ScrollView>
    );
}
export default UserAccount;