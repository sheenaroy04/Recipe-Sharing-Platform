import { Button, SafeAreaView, ScrollView, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View ,Animated} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
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
const screenHeight = Dimensions.get('window').height;
const heightPercent = 25;
interface Category {
  id: number;
  name: string;
}



const Home  :React.FC = () => {
  const user  = useSelector((state : UserState )=> state.user);

  const[categories , setCategories] = useState<Category[]>([]);
  const[activeCategory , setActiveCategory] = useState<number>(0);
  const[recipes , setRecipes] = useState<RecipeType[]>([]);
  const[isScrollDown , setIsScrollDown] = useState<boolean>(false);
  const[scrollPos , setScrollPos] = useState<number>(0);
  const[isVeg , setIsVeg] = useState<any>(null);

  const height = useRef(new Animated.Value(20)).current;

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
    const token = await AsyncStorage.getItem('access_token');
    let url = `${REACT_APP_BASE_API_URL}/food/recipies/`;
    if(activeCategory !== 0 && isVeg !== null){
      url += `${activeCategory}/`;
      url += isVeg ?  'vegetarian' : 'non-vegetarian'
    }
    else if(activeCategory !== 0){
      url +=  `category=${activeCategory}`;
      console.log('Changed')
    }
    else if(isVeg !== null){
      url += isVeg ?  'vegetarian' : 'non-vegetarian'
    }
    try {
      const recipeList = await fetch(`${url}`,{
        method:'GET',
        headers:{
          "Authorization" : `Bearer ${token}`,
          'Content-Type' : 'application/json'
        }
      });
      const responseData =await recipeList.json();
      //console.log(responseData);
      setRecipes(responseData);
    } catch (error) {
      
    }
  }

  const handleScrollY = (event:any ) =>{
    
    const currentPos = event.nativeEvent.contentOffset.y;
    //console.log(currentPos)
    const scrollDown = currentPos > screenHeight * (heightPercent / 100) ;
    setIsScrollDown(scrollDown);
    setScrollPos(currentPos);

    
    
  }

  useEffect(()=>{
    fetchCategories();
    fetchRecipes();
  },[activeCategory , isVeg])

  useEffect(()=>{
    Animated.timing(height, {
      toValue: isScrollDown ? 0 : 50, // Change 100 to your component's visible height
      duration: 500,
      useNativeDriver: false, // height does not support useNativeDriver
    }).start();
  },[isScrollDown , height])

  return (
    <SafeAreaView tw='flex-1 items-center px-6'>
      <LinearGradient colors={['#E65100','#EF6C00']} 
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        tw='flex flex-col w-[100vw] px-4 bg-orange-600 rounded-b-3xl'>
        <SearchBar/>
      <Animated.View style={{height}}>
      <PoppinsText tw='w-full text-2xl text-white font-semibold mb-2'>
        Hello {user.userName},
      </PoppinsText>
      </Animated.View>
    </LinearGradient>
      
    <View tw="flex w-full flex-row items-center">
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
      <View tw='w-[90%] flex flex-row items-center justify-end'>
        <TouchableOpacity tw='mx-1' onPress={()=>setIsVeg(null)}>
          <Text>All</Text>
        </TouchableOpacity>  
        <TouchableOpacity tw='mx-1' onPress={()=>setIsVeg(true)}>
          <Text>Veg</Text>
        </TouchableOpacity>
        <TouchableOpacity tw='mx-1' onPress={()=>setIsVeg(false)}>
          <Text>Non-Veg</Text>
        </TouchableOpacity>
      </View>
      <ScrollView tw='flex-1  w-full my-4' showsVerticalScrollIndicator={false} 
                contentContainerStyle={{ alignItems:'center'}}
                onScroll={handleScrollY} scrollEventThrottle={16}>
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