import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import React from 'react';
import Navigation from './Navigation';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
SplashScreen.preventAutoHideAsync();


const customFonts = {
  Poppins : require('./assets/Poppins/Poppins-Regular.ttf'),
  'Poppins-Thin' : require('./assets/Poppins/Poppins-Thin.ttf'),
  Lato : require('./assets/Lato/Lato-Regular.ttf')
}


const App : React.FC = () => {

  const[fontsLoaded] = useFonts(customFonts);

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync(); 
      }
    }

    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Navigation/>
  );
}

export default App

