import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

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
    <View tw='flex-1 items-center justify-center'>
      <Text tw='text-center'>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default App

