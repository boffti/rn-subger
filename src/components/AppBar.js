import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Context } from '../context/SubContext';


const AppBar = ({ title, showStats=true }) => {
    const { state, getSubs } = useContext(Context);
    const [stats, setStats] = useState('0.00');

    useEffect(() => {
        getSubs();
        console.log("AppBar State ==>", state);
        var total = 0;
        state.forEach(item => {
            total += parseFloat(item.price);
        });
        // const total = state.map(item => item.price).reduce((acc, cur) => acc + cur.price, 0);
        setStats(total);
    }, [state]);

    return (
        <SafeAreaView>
            <View style={styles.menuWrapper}>
                <Text style={styles.appHeader}>{title}</Text>
                {showStats ? (
                    <TouchableOpacity style={styles.headerPriceWrapper}>
                        <Text style={styles.headerPrice}>{`$${stats}`}</Text>
                        <Text style={styles.headerUnit}>/mo</Text>
                        <Ionicons style={styles.headerIcon} name="layers-outline" size={20} />
                    </TouchableOpacity>
                ) : null}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerPrice: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#263238',
    },
    headerUnit: {
        fontSize: 12,
        fontWeight: '100',
        marginTop: 5,
        color: '#263238',
    },
    headerIcon: {
        marginTop: 5,
        marginLeft: 5,
        fontSize: 12,
        fontWeight: '100',
        color: '#263238',
    },
    headerPriceWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuWrapper: {
        height: 70,
        paddingHorizontal: 16,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    appHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#263238',
    },
});

export default AppBar;