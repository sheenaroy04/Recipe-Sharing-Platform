import React, { useEffect, useState } from 'react';
import '../index.css';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import cooking from '../images/Cooking.gif'
import RecipeSection from '../components/WelcomeComponents/RecipeSection';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import CategoryLoader from '../components/WelcomeComponents/CategoryLoader';
import Loading from '../components/Loading';

const Welcome = () => {
  const backendUrl = process.env.REACT_APP_BASE_API_URL;
  const user = useSelector(state => state.user);
  const navigate = useNavigate();

  const[recipies , setRecipies] = useState([]);
  const[loading,setLoading] = useState(false);
  const[categories , setCategories] = useState([]);
  const [users , setUsers] = useState([]);
  const[activeCategory , setActiveCategory] = useState('');
  const[dietary , setDietary] = useState("");

  const[currentPage , setCurrentPage] = useState(1);
  const[cardsPerPage , setCardsPerPage] = useState(8);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentItems = recipies.slice(indexOfFirstCard,indexOfLastCard);

  const[isModalOpen , setIsModalOpen] = useState(false);
  const[openPage , setOpenPage] = useState('');
  const[showCategoriesInSelect , setShowCategoriesInSelect] = useState(false);
  
  const[showLoading , ssetShowLoading] = useState(false);
  const[message , setMessage] = useState('');

  const pageNumbers = []

  for(let i = 1 ; i <= Math.ceil(recipies.length / cardsPerPage) ; i++){
    pageNumbers.push(i);
  }

  const recipeList =async () =>{
    setLoading(true);
    let recipeUrl = `${backendUrl}/food/recipies/`;

    if(activeCategory !== '' && dietary !== ""){
      recipeUrl += `${activeCategory}/`;
      recipeUrl += dietary === 'true'? 'vegetarian' :  'non-vegetarian'
    }
    else if(activeCategory !== ''){
      recipeUrl += `category=${activeCategory}`
    }
    else if(dietary !== ""){
      if(dietary === "true"){
        recipeUrl += `vegetarian`;
      }
      else{
        recipeUrl += `non-vegetarian`
      }
      
    }
    const fetchRecipe = await fetch(`${recipeUrl}`);
    const fetchRecipeResponse = await fetchRecipe.json();   
    setRecipies(fetchRecipeResponse);
    setLoading(false);
  }
  useEffect(() =>{
    recipeList();
  },[dietary,activeCategory])

  const categoryList = async() =>{
    const fetchCategories = await fetch(`${backendUrl}/food/categories/`);
    const fetchCategoriesResponse = await fetchCategories.json();
    setCategories(fetchCategoriesResponse);
    // console.log(fetchCategoriesResponse)
  }
  const getUsers = async(id) =>{
    const response = await fetch(`${backendUrl}/customers/users/register/`);
    const responseData = await response.json();
    // console.log(responseData);
    setUsers(responseData)
  }
  
  
  const handleCategory = (index) =>{
    setActiveCategory(index);
    setCurrentPage(1);
    setDietary('');
  }

  const newRecipeShareNavigation =() =>{
    if(user){
      ssetShowLoading(true);
      setMessage('Share your recipes...');
      setTimeout(()=>{
        ssetShowLoading(false);
        setMessage('');
        navigate('/post-recipe');
      },4000);
      
    }
    else{
      setIsModalOpen(true);
      setOpenPage('login')
    }
  }

  const modalOpen = (openPage) =>{
    setIsModalOpen(true);
    setOpenPage(openPage);
  }

  const modalClose = () =>{
    setIsModalOpen(false);
    setOpenPage('')
  }

  useEffect(() => {
    categoryList();
  },[])



  useEffect(() => {
    getUsers();
  },[])

 

  useEffect(()=>{
    const  handleWidthResize = () => {
      if(window.innerWidth < 768){
        setCardsPerPage(4)
        setShowCategoriesInSelect(true)
      }
      else if(window.innerWidth >= 768 && window.innerWidth < 1024){
        setCardsPerPage(6)
        setShowCategoriesInSelect(false)
      }
      else if(window.innerWidth >= 1024){
        setCardsPerPage(8)
        setShowCategoriesInSelect(false)
      }
    }
    
    window.addEventListener('resize' , handleWidthResize);
    handleWidthResize();
    return () => window.removeEventListener('resize',handleWidthResize)
  })

  

  return (
    <div>
      <Modal isOpen={isModalOpen} openPage={openPage} setOpenPage={setOpenPage} onClose={modalClose}  />
      <Loading showLoading={showLoading} message={message}/>
        <div className='welcome flex flex-col items-center justify-center'>
          <div className='bg-slate-800/60 py-12  w-full flex items-center justify-center flex-col gap-6 text-white
                  
                        '>
            <div className='text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-center font-bold '>
              <p className='text-orange-600'>Where every bite unfolds a story.</p>
              <p >In every dish, a journey discovered.</p> 
            </div>
            
            <div className='flex flex-col md:flex-row items-stretch  md:items-center justify-center gap-4'>
              <button onClick={newRecipeShareNavigation} className='px-6 font-poppins py-2 bg-orange-500 transition duration-200 hover:bg-orange-700 rounded-sm hover:scale-105
               text-l md:text-lg text-[#F0F8FF]  shadow-md shadow-black'>
                Begin Your Culinary Journey
              </button>
              <button className='px-6  font-poppins py-2 bg-slate-600 transition duration-200 hover:bg-slate-500 
                                rounded-sm hover:scale-105 text-l md:text-lg text-white  shadow-md shadow-black
                                flex flex-row gap-1 items-center justify-center    '>
               Get the App
               <DevicePhoneMobileIcon className="h-6 w-6 text-white" />
              </button>
            </div>
            
            
            
          </div>
          
        </div>

        <div id='featured' className='flex flex-col items-center w-[100vw] bg-gradient-to-r from-orange-700 to-orange-500 text-white'>
        <div className='w-full flex flex-col items-center justify-center mb-4'>
            <img className='h-[20vh] w-[30vw] md:h-[25vh] md:w-[15vw]' src={cooking} alt="" />
            <p className='text-4xl md:text-6xl   font-culina-share'>Featured Recipes</p>
        </div>
        

        <div className='flex w-full flex-col items-center justify-center gap-6'>
          <div className='w-[85%] md:w-[60%] font-poppins bg-white/30 px-4 py-2 rounded-full flex backdrop-blur-md shadow-md'>
            <input className='bg-transparent flex-1 focus:border-none outline-none text-white font-light placeholder-white  placeholder:text-sm  placeholder:italic  text-lg ' type="text" placeholder='What do you wanna cook today? ' />
            <MagnifyingGlassIcon className="h-6 w-6 text-white" />
          </div>
          
          <div className='flex flex-row items-center justify-between w-[80%] gap-4 lg:w-[60%]  flex-wrap  text-lg font-semibold'>
            {!showCategoriesInSelect ?
            <div className='flex gap-1 lg:gap-4 flex-wrap'>
              <button  onClick={()=> handleCategory('')} className={`px-4 py-1 text-sm md:text-md lg:text-xl font-light font-poppins  rounded-full ${activeCategory === '' ? ' text-slate-600  bg-white ':'  backdrop-blur-md shadow-md bg-white/20'}`} >
                  All
                </button>
              {categories.length === 0 ? 
                <>{Array.from({length:4}).map((_,index) =>(
                  <CategoryLoader key={index} />
                ))}
                
                </>
                :
                <>
              {categories.map((category , index) => (
                <button key={index} onClick={()=> handleCategory(category.id)} className={`px-4 py-1 text-sm md:text-md lg:text-xl font-light font-poppins   rounded-full ${activeCategory === category.id ? ' text-slate-600  bg-white ':' backdrop-blur-md shadow-md bg-white/20'}`} >
                 {category.name}
                </button>
              ))}
              </>
            }
            </div>
            :
            <select value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)} 
              className='px-4 py-1 outline-none text-sm md:text-md lg:text-xl font-light font-poppins  rounded-lg backdrop-blur-md shadow-md bg-white/20 w-2/5'>
              <option value="" className=' bg-orange-500'>All</option>
              {categories.map((category , index) => (
                <option key={index} className=' bg-orange-500' value={category.id} >
                 {category.name}
                </option>
              ))}
              
            </select>
              }
            <select value={dietary} onChange={(e) => setDietary(e.target.value)} 
              className='px-4 py-1 outline-none text-sm md:text-md lg:text-xl font-light font-poppins  rounded-lg backdrop-blur-md shadow-md bg-white/20 w-2/4 md:w-[20%]'>
              <option value="" className=' bg-orange-500'>All (Dietary)</option>
              <option  className=' bg-orange-500' value="true">Veg</option>
              <option className=' bg-orange-500' value="false">Non-Veg</option>
            </select>
            
          </div>
        </div>

        <RecipeSection currentItems={currentItems} categories={categories} users={users} recipeLoading={loading} />

        <div className='flex flex-row my-4 items-center justify-center w-full gap-4'>
              {pageNumbers.length>1 && pageNumbers.map((page) =>(
                <button onClick={()=>setCurrentPage(page)} key={page} className={` h-12 w-12 text-xl rounded-md border border-white ${currentPage === page && 'bg-slate-800 text-orange-600'}`}>
                  {page}
                </button>
              ))}
        </div>
        
        </div>
    </div>
  )
}

export default Welcome