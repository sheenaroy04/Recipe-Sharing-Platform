import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import React from 'react';
import Navigation from './Navigation';

SplashScreen.preventAutoHideAsync();




const App : React.FC = () => {

  useEffect(() =>{
    const hideSplashScreen = async() =>{
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await SplashScreen.hideAsync();
    }

    hideSplashScreen();
  },[])

  return (
    <Navigation/>
  );
}

export default App

