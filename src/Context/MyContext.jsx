import React, { createContext, useEffect } from 'react'
import { useState } from 'react'


const contextstore = createContext()

const MyContext = ({children}) => {
    const [images,setimages] = useState([])
    const fetchimages=async(category)=>{
        try{
        let response=await fetch(`https://pixabay.com/api/?key=47161757-bda7c986a4fc5dc320b499ff4&q=${category}`)
        let data = await response.json()
        setimages(data.hits)
        }catch(error){
            console.log("Error fetching images", error);
            
        }
    } 

  return (
    <contextstore.Provider value={{images,setimages,fetchimages}}>
        {children}
    </contextstore.Provider>
  )
}

export { MyContext , contextstore }