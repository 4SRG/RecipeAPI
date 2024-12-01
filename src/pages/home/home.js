import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/context'

const Home = () => {
    const { datas, loading } = useContext(Context)

    const recipeCards = datas?.recipes?.map(a => {
        return (
            <div className='box'>
                <div className='img-container'><img alt='loading.' className=' hover:scale-[1.2] w-[100%] h-[100%] object-cover ' src={a.image_url}></img></div>
                <p className='pt-1 text-[0.8rem] text-blue-500 italic'>{a.publisher}</p>
                <p className='mb-8 mt-1 text-[0.9rem] xl:text-[1rem]'>{a.title}</p>
                <Link to={`/details/${a.recipe_id}`}>Recipe Details</Link>
            </div>
        )

    })

    if(loading) return(<div className='flex justify-center items-center h-[70vh]'><h1>Loading Your Recipes !</h1></div>)
    else if(!recipeCards) return(<div className='flex justify-center items-center h-[70vh]'><h1>Please Search Your Desired Recipes !</h1></div>)
    return (
        <div className='home'>
            <div className='home-container grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 pt-1 px-[4%] gap-2 grid-cols-2 sm:scale-100 scale-[0.98]'>
                {datas && recipeCards}
            </div>

        </div>
    )
}

export default Home
