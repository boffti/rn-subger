import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { useTheme } from '../theme/ThemeProvider';

import Login from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator()

const LoginStackNavigator = () => {
    const { colors, isDark } = useTheme();
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.nav,
                },
                headerTitleStyle: {
                    color: colors.text,
                }
            }}>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="Signup"
                component={SignUpScreen}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default LoginStackNavigator;