import React, { useRef } from 'react';
import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import plus from '../../assets/plus.png'
import AddSubStack from './AddSubStack';
import MainStackNavigator from './MainStackNavigator';
import HomeScreen from '../screens/HomeScreen';
import CurrencyScreen from '../screens/CurrencyScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    const tabOffsetValue = useRef(new Animated.Value(0)).current;
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            // Floating Tab Bar...
            style: {
                backgroundColor: 'white',
                position: 'absolute',
                bottom: 40,
                marginHorizontal: 20,
                // Max Height...
                height: 60,
                borderRadius: 10,
                // Shadow...
                shadowColor: '#000',
                shadowOpacity: 0.06,
                shadowOffset: {
                    width: 10,
                    height: 10
                },
                paddingHorizontal: 20,
            }
        }}>

            <Tab.Screen name={"Home"} component={MainStackNavigator} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        // centring Tab Button...
                        position: 'absolute',
                        top: 15
                    }}>
                        <Ionicons
                            name={focused ? "home" : 'home-outline'}
                            size={20}
                            color={focused ? '#263238' : 'gray'}
                        ></Ionicons>
                    </View>
                )
            }}>

            </Tab.Screen>


            {/* <Tab.Screen name={"ActionButton"} component={AddSubStack} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TouchableOpacity>
                        <View style={{
                            width: 55,
                            height: 55,
                            backgroundColor: '#263238',
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: Platform.OS == "android" ? 50 : 30,
                        }}>
                            <Image source={plus} style={{
                                width: 22,
                                height: 22,
                                tintColor: 'white',
                            }}></Image>
                        </View>
                    </TouchableOpacity>
                )
            }}></Tab.Screen> */}

            <Tab.Screen name={"Settings"} component={CurrencyScreen} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        // centring Tab Button...
                        position: 'absolute',
                        top: 15,
                    }}>
                        <Ionicons
                            name={focused ? 'options' : 'options-outline'}
                            size={20}
                            color={focused ? '#263238' : 'gray'}
                        ></Ionicons>
                    </View>
                )
            }}></Tab.Screen>

        </Tab.Navigator>
    );
}

export default BottomTabNavigator
