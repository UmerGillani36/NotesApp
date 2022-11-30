import React from "react";
import Header from "./components/Header";
import { Routes ,Route} from "react-router-dom";
import ReadNote from "./pages/ReadNote";
import Home from "./pages/Home";

function App() {
  return (
  
   <div className='App'>
    <Header/>
  

   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/readnote/:id' element={<ReadNote/>}></Route>
   </Routes>
   </div>
        
        
    
   
  );
}

export default App;
