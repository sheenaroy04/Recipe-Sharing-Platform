import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

// Define a type for the Frame component's props
interface FrameProps {
  children: React.ReactNode;
}

const Frame: React.FC<FrameProps> = ({ children }) => {
  return (
    <LinearGradient
      colors={[ '#0F172A' ,'#334155']}
      start={{x:3 , y:0}} end={{x:3 , y:1}}
    tw='flex-1 items-center justify-center bg-slate-800'>
        <ScrollView tw='flex-1'>
            {children}
        </ScrollView>
      
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

export default Frame;
