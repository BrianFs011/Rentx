import React from 'react';
import { ThemeProvider } from 'styled-components';

import {useFonts, Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import {Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold} from '@expo-google-fonts/archivo';
import AppLoading from 'expo-app-loading';

import { Home } from './src/screens/Home';
import theme from './src/styles/theme';
import { CarDetails } from './src/screens/CarDetails';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_500Medium,
    Archivo_400Regular, 
    Archivo_500Medium, 
    Archivo_600SemiBold,
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme} >
      <CarDetails/>
    </ThemeProvider>
  );
}
