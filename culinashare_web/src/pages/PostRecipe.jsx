import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import StepOne from '../components/PostRecipeComponents/StepOne';
import StepTwo from '../components/PostRecipeComponents/StepTwo';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';

const PostRecipe = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user)
  const[currentPage , setCurrentPage] = useState(1);
  const[title,setTitle] = useState('');
  const[image,setImage] = useState(null);
  const[description , setDescription] = useState('');
  const[procedure , setProcedure] = useState('');
  const[categoryId , setCategoryId] = useState(null);
  const[isVegetarian , setIsVegetarian] = useState(true);
  const[preparationTime , setPreparationTime] = useState(null);
  const[servings , setServings] = useState(0);
  const[ingredients , setIngredients] = useState([]);

  const[recipeId,setRecipeId] = useState(0);

  const[categories , setCategories] = useState([]);
  const backendUrl = process.env.REACT_APP_BASE_API_URL;

  const[showLoading , setShowLoading] = useState(false);
  const[message,setMessage] = useState('');

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
    formData.append('categories',[parseInt(categoryId)])
    try {
      const uploadPost =  await fetch(`${backendUrl}/food/recipies/`,{
        method:'POST',
        // headers: {
        //   'Content-Type': 'application/json', 
        // },
        body:formData
      });
      const response = await uploadPost.json();
      console.log(response)
      const newRecipeId = response.data.recipe_id;
    await setRecipeId(newRecipeId);
    postIngredients(newRecipeId, ingredients);

             
    } catch (error) {
      console.error(error)
    }
  }

  const postIngredients = async (recipeId, ingredients) => {
    const ingredientList = ingredients.map((ingredient) => ({
        ...ingredient,
        recipe: recipeId
    }));

    try {
        const uploadIngred = await fetch(`${backendUrl}/food/ingredients/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ingredientList)
        });

        const response = await uploadIngred.json();

        if (!uploadIngred.ok) {
            console.log(response.errors);
        } else {
            setMessage(response.message);
            setShowLoading(true);
            setTimeout(() => {
                setShowLoading(false);
                navigate('/');
                setMessage('');
            }, 4000)
        }
    } catch (error) {
        console.error(error);
    }
}


  useEffect(() => {
    fetchCategories();
  },[])
  

  return (
    <div className=' w-[100vw] flex flex-col items-center  justify-center p-2 mt-16 md:p-8'>
      <Loading showLoading={showLoading} message={message}/>
      <div className='flex flex-row items-center justify-center gap-6 my-6'>
        <button className={`px-4 py-1 rounded-lg text-xl font-poppins   ${currentPage>0 &&'bg-orange-600 text-white'}  `}>1</button>
        <button className={`px-4 py-1 rounded-lg text-xl font-poppins   ${currentPage>1 &&'bg-orange-600 text-white' }`}>2</button>
      </div>
      {currentPage === 1 ?

        <StepOne title={title} setTitle={setTitle} categories={categories} categoryId={categoryId} setCategoryId={setCategoryId} description={description}
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