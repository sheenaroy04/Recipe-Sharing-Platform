import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import Frame from '../components/Frame'
import logo from '../assets/culinashare_.png';

const Login = () => {
  return (
    <Frame>
      <View tw='w-[100vw] flex-1 items-center  h-[100vh] py-32'>
        <Image source={logo} tw='w-48 h-20' />

        <TextInput tw='bg-white/60 w-2/3 backdrop-filter-md shadow-md' placeholder='Username' />
      </View>
      
      
    </Frame>
  )
}

export default Login