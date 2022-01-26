import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { AppearanceProvider } from 'react-native-appearance';
import { ThemeProvider } from './src/theme/ThemeProvider';
import { NativeBaseProvider } from 'native-base';
import { Provider as SubProvider } from './src/context/SubContext';
import { Provider as UnitProvider } from './src/context/UnitContext';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import 'react-native-get-random-values'

export default function App() {
  return (
    <NativeBaseProvider>
      <AppearanceProvider>
        <ThemeProvider>
          <SubProvider>
            <UnitProvider>
              <NavigationContainer>
                <MainStackNavigator />
              </NavigationContainer>
            </UnitProvider>
          </SubProvider>
        </ThemeProvider>
      </AppearanceProvider>
    </NativeBaseProvider>
  );
}
