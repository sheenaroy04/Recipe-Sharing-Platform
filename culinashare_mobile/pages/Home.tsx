import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import SearchBar from '../components/SearchBar'

const Home = () => {
  return (
    <SafeAreaView tw='flex-1 items-center '>
      <ScrollView tw='flex-1' contentContainerStyle={{ alignItems:'center'}}>
      {/* <View tw='w-[80%] bg-[#F0F8FF] rounded-full  flex flex-row items-center py-2 px-4'
        style={{
            position:'absolute',
            shadowColor:'#000',
            shadowOffset:{
                width:0,
                height:2
            },
            shadowOpacity:0.8,
            shadowRadius: 20,
            elevation: 4,
        }}
    >
        <TextInput tw='flex-1' placeholder='Search recipe...' />
      
    </View> */}
      
      <StatusBar backgroundColor='#cf4d0e' />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})