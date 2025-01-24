import React, { useContext, useEffect, useState } from 'react'
import { contextstore } from '../Context/MyContext'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Searchpage = () => {
    const {images,fetchimages} =useContext(contextstore)

    const homepage=async()=>{
        await fetchimages()
      }
    
      useEffect(()=>{
       homepage()
      },[])
      
  return (<>
  <div className='h-full w-350 ml-6 border border-indigo-300 bg-gray-300'>
  <div className='w-1/5 border border-gray-400 p-4'>
    <h3>
      Name:Meraj Ahmad <br/>
      Email:meraj656@gmail.com
    </h3>
  </div>
    <div className='w-[30%] mx-auto'>
      <Navbar/>
    </div>
    <div className='main grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>
    {
        images ? images.map((item)=> (
            <div key={item.id} className="h-[300px] border w-[300px] overflow-hidden rounded-3xl mx-auto">
            <div className="h-[80%] w-full overflow-hidden border border-white bg-gray-100">
              <img
                src={item.largeImageURL}
                className="h-full w-full object-cover transition-all hover:scale-110 cursor-pointer"
              /></div>
               <div className='h-[20%] w-full'>
               <Link to={'/captionpage'}><button type="button" className=" h-full w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Caption</button></Link>
              </div> 
            </div>
           
         )): <h3>Error</h3>
     }
     </div>
     </div>
  </>)
}

export default Searchpage