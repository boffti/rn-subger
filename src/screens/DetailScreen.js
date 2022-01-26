import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Context } from '../context/SubContext';
import { FAB } from 'react-native-paper';

const DetailScreen = ({ route }) => {
    const { state } = useContext(Context);
    const { id } = route.params;
    const sub = state.find(item => item.id === id);
    const { name, price, color, desc, billPeriod, billUnit, firstPayment, paymentMethod, note } = sub;
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#fff' barStyle='dark-content' />
            <View style={{ ...styles.card, backgroundColor: color }}>
                <Text style={styles.cardTitle}>{name}</Text>
                <Text style={styles.cardSubtitle}>{desc}</Text>
                <Text style={styles.cardPrice}>{`$${price}`}</Text>
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.subHeader}>Bill Period</Text>
                <Text style={styles.subText}>{`Every ${billPeriod} ${billUnit}`}</Text>
                <Text style={styles.subHeader}>First Payment</Text>
                <Text style={styles.subText}>{`${firstPayment}`}</Text>
                <Text style={styles.subHeader}>Payment Method</Text>
                <Text style={styles.subText}>{paymentMethod}</Text>
                <Text style={styles.subHeader}>Note</Text>
                <Text style={styles.subText}>{note}</Text>
            </View>
            <FAB
                style={styles.fab}
                icon="pencil"
                label='Edit Subscription'
                onPress={() => addSub(data, () => console.log('Edit Subscription'))}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    wrapper: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    subHeader: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 16,
        marginTop: 5,
        marginBottom: 12,
    },
    card: {
        height: 200,
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    cardSubtitle: {
        fontSize: 16,
        marginTop: 5,
    },
    cardPrice: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 20,
    },
    fab: {
        margin: 16,
        width: 200,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        backgroundColor: '#263238',
    },
});

export default DetailScreen;