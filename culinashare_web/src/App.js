import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import RecipeView from './pages/RecipeView';
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import RecipePostRoute from "./routes/RecipePostRoute";
import PostRecipe from "./pages/PostRecipe";
import ScrollToTop from "./routes/ScrollToTop";
import SideBar from "./components/SideBar";
import Profile from "./pages/Profile";


function App() {

  return (
    <>
      <NavBar/>
      <SideBar/>
      <ScrollToTop/>
      <Routes>
        
        <Route path='/' element={<Welcome/>}/>
        
        <Route element={<RecipePostRoute/>}>
          <Route element={<PostRecipe/>} path="/post-recipe"/>
          <Route element={<Profile/>} path='/profile'/>
        </Route>
        <Route  path='/recipe/:recipeId' element={<RecipeView/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </>
    
  );
}

export default App;
