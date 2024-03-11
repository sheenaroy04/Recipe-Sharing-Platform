import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Frame from '../components/Frame'
import logo from '../assets/culinashare_.png';
import cook from '../assets/Cooking.gif';

import { RootStackParamList } from '../navigationTypes';
import { StackNavigationProp } from '@react-navigation/stack';

type RegisterScreenNavProp = StackNavigationProp<RootStackParamList , 'Register'>;

type Props = {
  navigation : RegisterScreenNavProp
}

const Register : React.FC<Props> = ({navigation}) => {
  const[username , setUsername] = useState<string>('');
  const[password , setPassword] = useState<string>('');
  const[email,setEmail] = useState<string>('');
  return (
    <Frame>
      <View tw='w-[100vw] flex-1 items-center justify-around h-[100vh] py-32'>
        <View tw='w-full flex flex-col items-center'>
          <Image source={logo} tw='w-3/4 h-1/3' />
          <Image source={cook} tw='w-2/4 h-1/3' />
        </View>
        

        <View tw='w-full flex flex-col items-center gap-4'>
          <TextInput value={username} onChangeText={(e)=>setUsername(e)} tw='bg-white/60 w-[90%] backdrop-filter-md shadow-md p-2 rounded-md text-l ' placeholder='Username' />
          <TextInput value={email} onChangeText={(e)=>setEmail(e)} tw='bg-white/60 w-[90%] backdrop-filter-md shadow-md p-2 rounded-md text-l ' placeholder='Email' />
          <TextInput value={password} onChangeText={(e)=>setPassword(e)}  secureTextEntry={true} tw='bg-white/60 w-[90%] backdrop-filter-md shadow-md p-2 rounded-md text-l ' placeholder='Create New Password' />

          <TouchableOpacity tw='w-[90%] p-2 flex items-center justify-center bg-orange-600'>
            <Text tw='text-white text-xl font-semibold'>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')} tw='w-full flex flex-row items-center justify-center'>
            <Text tw='text-l text-white'>Already connected?</Text>
            <Text tw='text-l text-orange-500 underline'> Login</Text>
          </TouchableOpacity>
          
        </View>
        
      </View>
      
      
    </Frame>
  )
}

export default Register