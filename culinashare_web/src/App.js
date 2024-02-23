import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import RecipeView from './pages/RecipeView';
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import RecipeViewRoute from "./routes/RecipeViewRoute";

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        
        <Route element={<RecipeViewRoute/>}>
          <Route  path='/recipe/:recipeId' element={<RecipeView/>}/>
        </Route>
        
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </>
    
  );
}

export default App;
