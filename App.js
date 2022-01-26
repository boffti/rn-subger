import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { AppearanceProvider } from 'react-native-appearance';
import { ThemeProvider } from './src/theme/ThemeProvider';
import { NativeBaseProvider } from 'native-base';
import { Provider as SubProvider } from './src/context/SubContext';
import MainStackNavigator from './src/navigation/MainStackNavigator';

export default function App() {
  return (
    <NativeBaseProvider>
      <AppearanceProvider>
        <ThemeProvider>
          <SubProvider>
            <NavigationContainer>
              <MainStackNavigator />
            </NavigationContainer>
          </SubProvider>
        </ThemeProvider>
      </AppearanceProvider>
    </NativeBaseProvider>
  );
}
