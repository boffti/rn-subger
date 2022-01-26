import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FAB } from 'react-native-paper';

const image = require('../../assets/splashimage.png');

const SplashScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#fff' barStyle='dark-content' />
            <View style={styles.wrapper}>
                <Text style={styles.header}>Subscription Manager</Text>
                <Image source={image} style={styles.image} />
            </View>
            <FAB style={styles.fab} label='Skip' onPress={() => navigation.navigate('Main')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    skipButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#263238',
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#263238'
    },
    image: {
        resizeMode: 'contain',
        width: 300,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default SplashScreen;