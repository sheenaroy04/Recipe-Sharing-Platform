import { View, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import cook from '../assets/Cooking.gif'

// Define a type for the Frame component's props
interface FrameProps {
  children: React.ReactNode;
}

const Frame: React.FC<FrameProps> = ({ children }) => {
  return (
    <LinearGradient
      colors={[ '#722906','#cf4d0e' ]}
      start={{x:3 , y:0}} end={{x:3 , y:1}}
    tw='flex-1 items-center justify-center'>
      <ImageBackground source={cook} resizeMode='contain' tw='flex-1 items-center justify-center '>
        <ScrollView tw='flex-1'>
            {children}
        </ScrollView>
        </ImageBackground>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

export default Frame;
