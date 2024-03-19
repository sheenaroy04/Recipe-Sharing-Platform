import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import SearchBar from '../components/SearchBar'
import PoppinsText from '../components/Custom/PoppinsText';
import { useSelector } from 'react-redux';
import {State as UserState} from '../redux/reducers';
import {REACT_APP_BASE_API_URL} from '../env.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RecipeCard from '../components/RecipeCard';
import {RecipeType} from '../types/type'
import { LinearGradient } from 'expo-linear-gradient';

interface Category {
  id: number;
  name: string;
}



const Home  :React.FC = () => {
  const user  = useSelector((state : UserState )=> state.user);

  const[categories , setCategories] = useState<Category[]>([]);
  const[activeCategory , setActiveCategory] = useState<number>(0);
  const[recipes , setRecipes] = useState<RecipeType[]>([]);

  const fetchCategories = async() =>{
    try {
      const categories = await fetch(`${REACT_APP_BASE_API_URL}/food/categories/`);
      const response : Category[] = await categories.json();
      response.unshift({
        "id" : 0,
        "name" : "All"
      })
      //console.log(response);
      setCategories(response);
    } catch (error) {
      
    }
  }

  const fetchRecipes = async() =>{
    const token = await AsyncStorage.getItem('access_token')
    try {
      const recipeList = await fetch(`${REACT_APP_BASE_API_URL}/food/recipies/`,{
        method:'GET',
        headers:{
          "Authorization" : `Bearer ${token}`,
          'Content-Type' : 'application/json'
        }
      });
      const responseData =await recipeList.json();
      console.log(responseData);
      setRecipes(responseData);
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    fetchCategories();
    fetchRecipes();
  },[])

  return (
    <SafeAreaView tw='flex-1 items-center px-6'>
      <LinearGradient colors={['#E65100','#EF6C00']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      tw='flex flex-col w-[100vw] px-4 bg-orange-600 rounded-b-3xl'>
      <SearchBar/>

      <PoppinsText tw='w-full text-2xl text-white font-semibold'>
        Hello {user.userName},
      </PoppinsText>

      <View tw="flex w-full">
      <ScrollView horizontal={true} tw='flex flex-row my-4' 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{}}>
        {categories.map((category,index)=>(
          <TouchableOpacity onPress={()=> setActiveCategory(category.id)} key={index} tw={`bg-red-300 px-2 py-1 bg-slate-600 mx-1 rounded-full ${activeCategory === category.id ? 'bg-slate-600': 'bg-slate-600/50'}`}>
            <Text tw={`text-white text-l ${activeCategory === category.id ? 'font-semibold': ''}`}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      
      </ScrollView>
      </View>
    </LinearGradient>
      

      <ScrollView tw='flex-1  w-full my-4' showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems:'center'}}>
        {recipes.length>0 && recipes.map((recipe , index) =>(
          <RecipeCard key={index} recipe={recipe}/>
        ))}
      <Button onPress={()=>AsyncStorage.removeItem('access_token')} title='Logout'/>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})