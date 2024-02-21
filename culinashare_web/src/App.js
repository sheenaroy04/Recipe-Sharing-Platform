import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </>
    
  );
}

export default App;
