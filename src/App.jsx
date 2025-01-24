import './App.css'
import Addcaptionpage from './Components/Addcaptionpage';
import Navbar from './Components/Navbar'
import Searchpage from './Components/Searchpage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Searchpage/>}/>
      <Route path='/captionpage/:id' element={<Addcaptionpage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
