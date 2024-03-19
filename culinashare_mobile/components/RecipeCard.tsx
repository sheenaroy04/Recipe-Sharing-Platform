import { View, Text ,StyleSheet} from 'react-native'
import React from 'react';
import { RecipeType } from '../types/type';
import PoppinsText from './Custom/PoppinsText';
import { FontAwesome } from '@expo/vector-icons';

interface RecipeProps {
    recipe : RecipeType
}

const RecipeCard :React.FC<RecipeProps>= ({recipe}) => {
  return (
    <View  style={styles.shadowStyle}
        tw='my-2 bg-[#F0F8FF]  w-full p-2 flex  justify-center rounded-lg'>
        <View tw='flex flex-row items-center justify-between w-full flex-wrap'>
            <PoppinsText tw='text-xl'>{recipe.title}</PoppinsText>
            <FontAwesome name="dot-circle-o" size={15} color={recipe.is_vegetarian?"green" : 'red'} />
        </View>
        
        <Text>{recipe.description}</Text>
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
      }
})