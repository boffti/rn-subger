import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { useTheme } from '../theme/ThemeProvider';

import HomeScreen from '../screens/HomeScreen';
import AddSubScreen from '../screens/AddSubScreen';
import DetailScreen from '../screens/DetailScreen';
import SplashScreen from '../screens/SplashScreen';
import LoginStackNavigator from './LoginStackNavigator';

const Stack = createStackNavigator()

const MainStackNavigator = () => {
    const { colors, isDark } = useTheme();
    return (
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.nav,
                },
                headerTitleStyle: {
                    color: colors.text,
                }
            }}>
            <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="LoginStack"
                component={LoginStackNavigator}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="Main"
                component={HomeScreen}
                options={{ headerShown: false }} />
            <Stack.Screen name="AddSub" component={AddSubScreen}
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen name="Detail" component={DetailScreen}
                options={{
                    headerShown: false,
                }} />
        </Stack.Navigator>
    );
}

export default MainStackNavigator;