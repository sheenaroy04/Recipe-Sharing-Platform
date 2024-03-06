import React, { useEffect, useState } from 'react';
import { PlusCircleIcon ,MinusCircleIcon } from "@heroicons/react/20/solid";
import IngredientSttore from '../components/PostRecipeComponents/IngredientSttore';
import { useSelector } from 'react-redux';
import StepOne from '../components/PostRecipeComponents/StepOne';
import StepTwo from '../components/PostRecipeComponents/StepTwo';

const PostRecipe = () => {
  const user = useSelector(state => state.user)
  const[currentPage , setCurrentPage] = useState(1);
  const[title,setTitle] = useState('');
  const[image,setImage] = useState(null);
  const[description , setDescription] = useState('');
  const[procedure , setProcedure] = useState('');
  const[categoryId , setCategoryId] = useState(0);
  const[isVegetarian , setIsVegetarian] = useState(true);
  const[preparationTime , setPreparationTime] = useState(null);
  const[servings , setServings] = useState(0);
  const[ingredients , setIngredients] = useState([]);

  const[recipeId,setRecipeId] = useState(0);

  const[categories , setCategories] = useState([]);
  const backendUrl = process.env.REACT_APP_BASE_API_URL;

  const fetchCategories = async() =>{
    try {
      const response = await fetch(`${backendUrl}/food/categories/`);
      const responseData = await response.json();
      setCategories(responseData);
    } catch (error) {
      console.error(error);
    }
  }

  const postNewRecipe = async() => {
    const formData = new FormData();
    formData.append('title' , title);
    formData.append('description' , description);
    formData.append('procedure',procedure);
    formData.append('is_vegetarian',isVegetarian);
    formData.append('preparation_time' , preparationTime);
    formData.append('servings', servings);
    formData.append('image',image);
    formData.append('author',user.userId);
    formData.append('categories',[parseInt(categoryId)+1])
    try {
      const uploadPost =  await fetch(`${backendUrl}/food/recipies/`,{
        method:'POST',
        body:formData
      });
      const response = await uploadPost.json();
      setRecipeId(response.data.recipe_id);
      console.log(response)
      // uploadIngredients();

      const ingredientList = ingredients.map((ingredient)=>{
        return{
          ...ingredient,
          recipe:recipeId
        }
      });
      console.log(ingredientList)

      const list = {
        data : ingredientList
      }
      
        const uploadIngred = await fetch(`${backendUrl}/food/ingredients/`,{
          method:'POST',
          body:JSON.stringify(list)
        });
        const response2 = uploadIngred.json();
        console.log(response2);
        console.log('Hellp')
      
    } catch (error) {
      console.error(error)
    }
  }

  const uploadIngredients = async() =>{
    const ingredientList = ingredients.map((ingredient)=>ingredient.recipe === recipeId);

    try {
      const uploadIngred = await fetch(`${backendUrl}/food/ingredients/`,{
        method:'POST',
        body:ingredientList.json()
      });
      const response = uploadIngred.json();
      console.log(response);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchCategories();
  },[])
  

  return (
    <div className=' w-[100vw] flex flex-col items-center  justify-center p-2 mt-16 md:p-8'>
      <div className='flex flex-row items-center justify-center gap-6 my-6'>
        <button className={`px-4 py-1 rounded-lg text-xl font-poppins   ${currentPage>0 &&'bg-orange-600 text-white'}  `}>1</button>
        <button className={`px-4 py-1 rounded-lg text-xl font-poppins   ${currentPage>1 &&'bg-orange-600 text-white' }`}>2</button>
      </div>
      {currentPage === 1 ?

        <StepOne title={title} setTitle={setTitle} categories={categories} categoryId={categories} setCategoryId={setCategoryId} description={description}
           setDescription={setDescription} servings={servings} setServings={setServings} image={image} setImage={setImage}
           currentPage={currentPage} setCurrentPage={setCurrentPage} isVegetarian={isVegetarian} setIsVegetarian={setIsVegetarian}
           preparationTime={preparationTime} setPreparationTime={setPreparationTime} />
           :
        <StepTwo procedure={procedure} setProcedure={setProcedure} ingredients={ingredients}
          setIngredients={setIngredients} currentPage={currentPage} setCurrentPage={setCurrentPage}
          postNewRecipe={postNewRecipe}
          />
    }
      
    </div>
  )
}

export default PostRecipe