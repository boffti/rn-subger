import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SignUpScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Signup Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});

export default SignUpScreen;