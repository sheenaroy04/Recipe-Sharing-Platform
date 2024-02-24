import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import RecipeView from './pages/RecipeView';
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import RecipePostRoute from "./routes/RecipePostRoute";
import PostRecipe from "./pages/PostRecipe";
import ScrollToTop from "./routes/ScrollToTop";


function App() {

  return (
    <>
      <NavBar/>
      <ScrollToTop/>
      <Routes>
        
        <Route path='/' element={<Welcome/>}/>
        
        <Route element={<RecipePostRoute/>}>
          <Route element={<PostRecipe/>} path="/post-recipe"/>
        </Route>
        <Route  path='/recipe/:recipeId' element={<RecipeView/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </>
    
  );
}

export default App;
