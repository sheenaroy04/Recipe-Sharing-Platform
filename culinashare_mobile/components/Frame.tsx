import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

// Define a type for the Frame component's props
interface FrameProps {
  children: React.ReactNode;
}

const Frame: React.FC<FrameProps> = ({ children }) => {
  return (
    <SafeAreaView tw='flex-1 items-center justify-center bg-blue-500'>
        <ScrollView tw='flex-1'>
            {children}
        </ScrollView>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default Frame;
