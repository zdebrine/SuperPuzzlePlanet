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
        fontSize: 40,
        fontWeight: '600',
        color: 'white',
        marginBottom: 50,
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
});

const UserAccount = ({ close }) => {
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
    const account = [
        <Card
            flex
            borderless
            style={styles.overlay}
            imageBlockStyle={{ marginTop: 50 }}
            imageStyle={{ paddingTop: 50, marginTop: 80, height: 110, width: 100 }}
            image="https://i.ibb.co/zJxzSK2/image.png"
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Text style={styles.sectionTitle}>Hi, {username}</Text>
            </TouchableWithoutFeedback>
            <Text style={styles.sectionBody}>Puzzles Solved: 15</Text>
            <Text style={styles.sectionBody}>Change Name</Text>
            <Input onChangeText={(text) => { handleChange(text) }} placeholder={username} color={'green'} style={{ borderColor: 'green' }} placeholderTextColor={'green'} />
            <Button style={styles.submitButton} color="primary" onPress={_saveUser}>SUBMIT</Button>
        </Card>

    ];

    return (
        <DeckSwiper
            style={styles.swiper}
            components={account}
            // nextElementStyle={styles.nextElement}
            onSwipeLeft={close}
            onSwipeRight={close}
        />
    );
}
export default UserAccount;