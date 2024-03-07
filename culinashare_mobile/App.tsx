/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView tw="flex-1 items-center justify-center">
      <StatusBar />
      <ScrollView>
        <View>Hello</View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
