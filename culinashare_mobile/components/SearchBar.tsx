import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const SearchBar = () => {
  return (
    <View tw='w-full bg-[#F0F8FF] rounded-full  my-10 flex flex-row items-center py-2 px-4'
        style={{
            
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
      
    </View>
  )
}

export default SearchBar