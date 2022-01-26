import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import AppBar from '../components/AppBar';
import { Picker } from 'react-native'
import { FAB } from 'react-native-paper';
import ColorPalette from 'react-native-color-palette'
import { useNavigation } from '@react-navigation/native';
import { Context as SubContext } from '../context/SubContext';

const options = ["Day", "Month", "Week", "Year"];

const AddSubScreen = () => {
    const { state, addSub } = useContext(SubContext);
    const [data, setData] = useState({
        name: '',
        price: '',
        desc: '',
        billPeriod: '',
        billUnit: '',
        firstPayment: '',
        paymentMethod: '',
        color: '',
        note: '',
    });

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#fff' barStyle='dark-content' />
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <AppBar title="New Subscription" showStats={false} />
                <View style={styles.priceInputWrapper}>
                    <TextInput
                        keyboardType="numeric"
                        textAlign="center"
                        style={styles.priceInput}
                        placeholder="0.00"
                        value={data.price}
                        onChangeText={(val) => setData({ ...data, price: val })} />
                    <Text style={styles.priceUnit}>USD</Text>
                </View>
                <View style={styles.subWrapper}>
                    <Text style={styles.subTitle}>Subscription Name</Text>
                    <TextInput
                        style={styles.subInput}
                        placeholder="e.g   Spotify"
                        value={data.name}
                        onChangeText={(val) => setData({ ...data, name: val })} />
                </View>
                <View style={styles.subWrapper}>
                    <Text style={styles.subTitle}>Description</Text>
                    <TextInput
                        style={styles.subInput}
                        placeholder="e.g   Student Plan"
                        value={data.desc}
                        onChangeText={(val) => setData({ ...data, desc: val })} />
                </View>
                <View
                    style={{
                        marginTop: 12,
                        borderBottomColor: '#212121',
                        borderBottomWidth: 0.2,
                    }}
                />
                <View style={styles.subWrapper}>
                    <Text style={styles.subTitle}>Billing Period</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text>Every</Text>
                        <TextInput
                            style={{ ...styles.subInput, width: 100 }}
                            keyboardType="numeric"
                            placeholder="1" value={data.billPeriod}
                            onChangeText={(val) => setData({ ...data, billPeriod: val })} />
                        <View style={styles.unitPicker}>
                            <Picker
                                selectedValue={data.billUnit}
                                onValueChange={(itemValue, itemIndex) =>
                                    setData({ ...data, billUnit: itemValue })
                                }>
                                {options.map((item, index) => {
                                    return <Picker.Item label={item} value={item} key={index} />
                                })}
                            </Picker>
                        </View>
                    </View>
                </View>
                <View style={styles.subWrapper}>
                    <Text style={styles.subTitle}>First Payment</Text>
                    <TextInput
                        style={styles.subInput}
                        placeholder="e.g  Today"
                        value={data.firstPayment}
                        onChangeText={(val) => setData({ ...data, firstPayment: val })} />
                </View>
                <View style={styles.subWrapper}>
                    <Text style={styles.subTitle}>Payment Method</Text>
                    <TextInput
                        style={styles.subInput}
                        placeholder="e.g  Credit Card"
                        value={data.paymentMethod}
                        onChangeText={(val) => setData({ ...data, paymentMethod: val })} />
                </View>
                <View
                    style={{
                        marginTop: 12,
                        borderBottomColor: '#212121',
                        borderBottomWidth: 0.2,
                    }}
                />
                <View style={styles.subWrapper}>
                    <Text style={styles.subTitle}>Color</Text>
                    <ColorPalette
                        onChange={color => setData({ ...data, color })}
                        value={data.color}
                        title=""
                        colors={['#EF5350', '#66BB6A', '#FFCA28', '#90CAF9', '#F48FB1', '#FFFFFF']}
                    />
                </View>
                <View style={styles.subWrapper}>
                    <Text style={styles.subTitle}>Note</Text>
                    <TextInput
                        style={styles.subInput}
                        placeholder="e.g  Got during summer sale"
                        value={data.note}
                        onChangeText={(note) => setData({ ...data, note })} />
                </View>
                <FAB
                    style={styles.fab}
                    icon="floppy"
                    label='Save Subscription'
                    onPress={() => addSub(data, () => navigation.navigate('Main'))}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    saveButton: {
        width: 120,
        height: 50,
        marginTop: 12,
        borderRadius: 30,
        borderWidth: 0.2,
        backgroundColor: '#263238',
        color: '#fff',
        fontSize: 16,
        padding: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        marginLeft: 12,
    },
    priceInputWrapper: {
        height: 150,
        marginHorizontal: 16,
        borderRadius: 8,
        borderColor: '#e0e0e0',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    priceInput: {
        height: 60,
        paddingHorizontal: 16,
        fontSize: 50,
    },
    priceUnit: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#757575',
    },
    subWrapper: {
        marginHorizontal: 16,
        marginTop: 12
    },
    subTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#263238',
        marginBottom: 8,
    },
    subInput: {
        height: 45,
        paddingHorizontal: 18,
        fontSize: 18,
        borderRadius: 8,
        borderColor: '#e0e0e0',
        borderWidth: 1,
        backgroundColor: '#fafafa',
    },
    unitPicker: {
        height: 45,
        width: 200,
        paddingHorizontal: 18,
        fontSize: 18,
        borderRadius: 8,
        borderColor: '#e0e0e0',
        borderWidth: 1,
        backgroundColor: '#fafafa',
    },
    fab: {
        margin: 16,
        width: 200,
        alignSelf: 'center',
        backgroundColor: '#263238',
    },
});

export default AddSubScreen;