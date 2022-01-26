import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, FlatList, Image, ScrollView, SafeAreaView, StatusBar, Text, TouchableOpacity } from 'react-native';
import AppBar from '../components/AppBar';
import SubItem from '../components/SubItem';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const empty = require('../../assets/empty.png');
import { Context as SubContext } from '../context/SubContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
    const { state, getSubs } = useContext(SubContext);
    const navigation = useNavigation();

    useEffect(() => {
        getSubs();
        // console.log("Homescreen State ==>", state);
        const listener = navigation.addListener('focus', () => {
            getSubs();
        });
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#fff' barStyle='dark-content' />
            <AppBar title="Subscription Manager" />
            {state.length > 0 ? (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item.id}
                    data={state}
                    renderItem={({ item }) => (
                        <SubItem
                            id={item.id}
                            title={item.name}
                            prices={item.prices}
                            bgColor={item.color}
                            sub={item.desc} />
                    )}
                />) : (
                <View style={styles.emptyImageWrapper}>
                    <Image
                        source={empty}
                        style={styles.emptyImage}
                        resizeMode="contain"
                        resizeMethod="resize" />
                    <Text style={{ color:'#263238' }}>Nothing to show</Text>
                </View>
            )}
            <TouchableOpacity style={styles.fab} onPress={() => console.log('settings')}>
                <Ionicons style={{ color: '#263238' }} name="options" size={30} />
            </TouchableOpacity>
            <FAB
                style={styles.fabAdd}
                icon="plus"
                label='Add Subscription'
                onPress={() => navigation.navigate('AddSub')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    fab: {
        position: 'absolute',
        margin: 16,
        left: 0,
        bottom: 0,
        marginBottom: 22,
    },
    fabAdd: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#263238',
    },
    emptyImageWrapper: {
        // flex: 1,
        top: 150,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    emptyImage: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        alignSelf: 'center',
    }
});

export default HomeScreen;