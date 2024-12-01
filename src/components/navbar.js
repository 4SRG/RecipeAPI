import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../context/context'

const Navbar = () => {
    
    const  {search, setSearch, handleSubmit} = useContext(Context)

    return (
        <nav className='navbar flex mx-auto justify-between mt-8 md:px-10 px-[3%] items-center sm:gap-0 gap-4'>
            <h1 className='sm:text-[1.5rem]'>Recipes Book</h1>
            <form className='lg:w-[400px] w-[45%]' onSubmit={handleSubmit}> 
            <input 
                className='input p-1 px-2 border-2 w-[100%]' 
                placeholder='Search Recipes...'
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            ></input>
            </form>

            <ul className='flex gap-3 md:gap-10 justify-center'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/favorite">Favorite</NavLink>
            </ul>
        
        </nav>
    )
}

export default Navbar
