import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Frame from '../components/Frame'
import logo from '../assets/culinashare_.png';
import { RootStackParamList } from '../navigationTypes';
import { StackNavigationProp } from '@react-navigation/stack';
import PoppinsText from '../components/Custom/PoppinsText';
import Constants from 'expo-constants';

type LoginScreenNavProp = StackNavigationProp<RootStackParamList , 'Login'>;

type Props = {
  navigation : LoginScreenNavProp
}

interface LoginCredentials{
  username : string,
  password : string
}

const Login : React.FC<Props> = ({navigation}) => {
  const[username , setUsername] = useState<string>("");
  const[password , setPassword] = useState<string>("");

  const backendUrl = 'https://88a5-115-242-182-162.ngrok-free.app';

  const login = async () => {
    const data = {
      "username": "nandhakumar",
      "password": "nandhakumar",
    }
    console.log(data)
    try {
      const loginCredentials = await fetch(`${backendUrl}/api/v1/customers/users/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      // console.log('Status:', loginCredentials.status); 
      const response = await loginCredentials.json();
      console.log(response);
      if(loginCredentials.status === 200){
        
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <Frame>
      <View tw='w-[100vw] flex-1 items-center justify-around h-[100vh] py-16'>
        <View tw='w-full flex flex-col items-center  justify-center' >
          <Image source={logo} tw='w-2/3 h-1/2'  style={{resizeMode : 'contain'}} />
          <PoppinsText tw='text-white text-center flex-1 text-xl'>
              Where every bite unfolds a story.
              In every dish, a journey discovered.
          </PoppinsText>
        </View>
        
        
        
        <View tw='w-full flex flex-col items-center gap-4'>
          <TextInput value={username} onChangeText={(e)=>setUsername(e)} tw='bg-white/80  w-[90%] backdrop-filter-md shadow-md p-2 rounded-md text-l ' placeholder='Username' />
          <TextInput value={password} onChangeText={(e)=>setPassword(e)}  secureTextEntry={true} tw='bg-white/80  w-[90%] backdrop-filter-md shadow-md p-2 rounded-md text-l ' placeholder='Password' />

          <TouchableOpacity onPress={login} tw='w-[90%] p-2   flex items-center justify-center bg-slate-700'>
            <Text tw='text-white text-xl font-semibold'>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Register')} tw='w-full flex flex-row items-center justify-center'>
            <Text tw='text-l text-white'>New to CulinaShare ?</Text>
            <Text tw='text-l text-slate-800 font-semibold underline'> Signup</Text>
          </TouchableOpacity>
          
        </View>
        
      
        
      </View>
      <Text tw='text-center text-white'>Forget Password</Text>
     
    </Frame>
  )
}

export default Login