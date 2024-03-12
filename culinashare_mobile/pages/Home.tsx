import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import SearchBar from '../components/SearchBar'
import PoppinsText from '../components/Custom/PoppinsText'

const Home = () => {
  return (
    <SafeAreaView tw='flex-1 items-center px-6'>
      <SearchBar/>

      <PoppinsText tw='w-full text-2xl font-semibold text-orange-600'>
        Hello Sakthi,
      </PoppinsText>

      <ScrollView tw='flex-1' contentContainerStyle={{ alignItems:'center'}}>
      
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})