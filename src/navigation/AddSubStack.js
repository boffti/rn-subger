import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { useTheme } from '../theme/ThemeProvider';

import AddSubScreen from '../screens/AddSubScreen';

const Stack = createStackNavigator()

const AddSubStack = () => {
    const { colors, isDark } = useTheme();
    return (
        <Stack.Navigator
            initialRouteName="AddSub"
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.nav,
                },
                headerTitleStyle: {
                    color: colors.text,
                }
            }}>
            <Stack.Screen name="AddSub" component={AddSubScreen}
                options={{
                    headerShown: false,
                }} />
        </Stack.Navigator>
    );
}

export default AddSubStack;