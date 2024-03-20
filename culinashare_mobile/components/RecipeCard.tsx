import { View, Text ,StyleSheet, Image , Dimensions} from 'react-native'
import React, { useEffect, useState } from 'react';
import { RecipeType } from '../types/type';
import PoppinsText from './Custom/PoppinsText';
import { FontAwesome } from '@expo/vector-icons';
import { REACT_APP_BASE_API_URL } from '../env';
import { REACT_APP_IMAGE_URL } from '../env';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const widthPercent = 100;
const heightPercent = 25;

interface RecipeProps {
    recipe : RecipeType
}

interface UserProps{
  id : number,
  username : string,
  email : string
}


const RecipeCard :React.FC<RecipeProps>= ({recipe}) => {
  const[users,setUsers] = useState<UserProps[]>([]);
  
  const returnUserName  = (id : number) =>{
    const user = users.find(user => user.id === id);
    return user ? user.username : 'User not found';
  }
  useEffect(() =>{
    const getUsers = async() =>{
      try {
        const userData = await fetch(`${REACT_APP_BASE_API_URL}/customers/users/register/`);
        const response = await userData.json();
        setUsers(response)
        //console.log(response)
      } catch (error) {
        
      }
      
    }
    getUsers();
  },[])

  return (
    <View  style={styles.shadowStyle}
        tw='my-2 bg-[#F0F8FF]  w-full  flex  justify-center rounded-lg'>
        <View tw='flex flex-col w-full items-center justify-center'> 
          <Image source={{uri : `${REACT_APP_IMAGE_URL}/${recipe.image}`}}  style={styles.image}/>
        </View>
        <View tw='flex flex-row items-center justify-between w-full flex-wrap p-2'>
          <View>
            <View tw='flex flex-row items-center gap-1'>
              <PoppinsText tw='text-xl'>{recipe.title}</PoppinsText>
              <FontAwesome name="dot-circle-o" size={15} color={recipe.is_vegetarian?"green" : 'red'} />
            </View>
            <View tw='flex flex-row items-center gap-1'>
              <Text tw='italic text-slate-400 font-semibold text-xs'>@{returnUserName(recipe.author)}</Text>
              <Text>{recipe.average_score ? recipe.average_score : 0}</Text>
              <FontAwesome name="star" size={15} color="orange" />
              <Text tw='text-xs'>({recipe.number_of_ratings})</Text>
            </View>
            
          </View>

          <View>
            <View tw='flex flex-row items-center gap-4'>
              {recipe.isBookMarked ? 
              <FontAwesome name="bookmark" size={20} color="orange" />:
              <FontAwesome name="bookmark-o" size={20} color="black" />
            }
            
              <FontAwesome name="commenting-o" size={20} color="black" />
            </View>
          </View>
          
          
        </View>
        
        
    </View>
  )
}

 


export default RecipeCard;

const styles = StyleSheet.create({
    shadowStyle : {
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3.5,
        elevation: 3,
      },
    image:{
      width : screenWidth * (widthPercent / 100),
      height : screenHeight * (heightPercent / 100),
      // resizeMode : 'contain'
    }
})