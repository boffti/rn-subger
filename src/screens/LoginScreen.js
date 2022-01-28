import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Button, TextInput } from 'react-native';
import { FAB } from 'react-native-paper';

const Login = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#fff' barStyle='dark-content' />
            <View style={styles.loginWrapper}>
                <Text style={styles.header}>Login</Text>
                <TextInput style={styles.input} placeholder='Username' />
                <TextInput style={styles.input} placeholder='Password' />
                <FAB style={styles.fab} label='Login' onPress={() => console.log('Login')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
    input: {
        borderColor: '#263238',
        borderWidth: 1,
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    fab: {
        margin: 16,
        backgroundColor: '#263238'
    },
    loginWrapper: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 150,
    }
});

export default Login;