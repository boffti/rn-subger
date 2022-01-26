import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Context as SubContext } from '../context/SubContext';
import { Context as UnitContext } from '../context/UnitContext';

const AppBar = ({ title, showStats = true }) => {
    const { state, getSubs } = useContext(SubContext);
    const { state: unitState, getUnit, setUnit } = useContext(UnitContext);
    const [stats, setStats] = useState('0.00');

    const changeUnit = () => {
        switch (unitState) {
            case '/mo':
                setUnit('/yr');
                var total = 0;
                state.forEach(item => {
                    total += parseFloat(item.prices.priceYear);
                });
                setStats(total);
                break;
            case '/yr':
                setUnit('/day');
                var total = 0;
                state.forEach(item => {
                    total += parseFloat(item.prices.priceDay);
                });
                setStats(total.toFixed(2));
                break;
            case '/day':
                setUnit('/wk');
                var total = 0;
                state.forEach(item => {
                    total += parseFloat(item.prices.priceWeek);
                });
                setStats(total.toFixed(2));
                break;
            case '/wk':
                setUnit('/mo');
                var total = 0;
                state.forEach(item => {
                    total += parseFloat(item.prices.priceMonth);
                });
                setStats(total);
                break;
        }
    };

    useEffect(() => {
        getSubs();
        var total = 0;
        state.forEach(item => {
            total += parseFloat(item.prices.priceMonth);
        });
        // const total = state.map(item => item.price).reduce((acc, cur) => acc + cur.price, 0);
        setStats(total);
    }, [state]);

    return (
        <SafeAreaView>
            <View style={styles.menuWrapper}>
                <Text style={styles.appHeader}>{title}</Text>
                {showStats ? (
                    <TouchableOpacity onPress={() => changeUnit()} style={styles.headerPriceWrapper}>
                        <Text style={styles.headerPrice}>{`$${stats}`}</Text>
                        <Text style={styles.headerUnit}>{unitState}</Text>
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