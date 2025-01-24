import React, { useContext, useState } from 'react'
import { contextstore } from '../Context/MyContext'
import { FaSearch } from "react-icons/fa"

const Navbar = () => {
    const {fetchimages,images} =useContext(contextstore)
    const [category,setCategory]=useState("")

    
    const handleSearch = async (e) => {
        e.preventDefault();
        await fetchimages(category)
        console.log(images);
        
        setCategory('');
       
    }
    
  return (
    <div className="w-full max-w-none flex flex-col gap-5">
    <div className="w-full flex flex-col gap-3 md:flex-row md:gap-8 items-center border-b-4">
      <form
        className="w-full flex gap-2 justify-center items-center md:w-2/5 text-center pt-4 md:pt-0"
        onSubmit={handleSearch} 
      >
        <input
          type="text"
          placeholder="Type Category Here .."
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="input input-bordered w-full max-w-xs italic placeholder:italic "
        />
        <button type="submit">
          <FaSearch className="text-xl cursor-pointer" />
        </button>
      </form>
      </div>
      </div>
  )
}

export default Navbar