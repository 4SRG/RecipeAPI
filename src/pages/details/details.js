import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { Context } from '../../context/context'

const Details = () => {
    const {id} = useParams()
    const {detailRecipe, setDetailRecipe, handleFav, inFav} = useContext(Context)
    

    useEffect(()=>{
    async function fetchDetail(idz) {
        try{
            const response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${idz}`)
            const data = await response.json()
            setDetailRecipe(data.recipe)
        }
        catch(e){
            console.log(e)
        }
    }
    const ingredients = detailRecipe?.ingredients?.map(a =>{
        return(
            <li>{a}</li>
        )
    })
        fetchDetail(id)
    },[id])

    // if(!detailRecipe) return(<div className='flex justify-center items-center h-[70vh]'><h1>Lodaing Details...</h1></div>)
    return (
        <div className='details'>
        {detailRecipe &&
            <div className='flex px-2 sm:flex-row flex-col'>
                <div className='imgcontainer flex sm:w-[50%] items-center self-center w-[90%] justify-center'>
                    <img alt="loading" className="rounded-lg w-[95%] max-w-[500px]" src={detailRecipe.image_url}></img>
                </div>
                <div className='w-[50%] leading-loose'>
                    <p className='text-[0.8rem] text-blue-400'>{detailRecipe.publisher}</p>
                    <p className='font-bold text-[1.3rem]'>{detailRecipe.title}</p>
                    <button onClick={()=>handleFav(detailRecipe)}className='my-1'>{inFav(detailRecipe.recipe_id) ? "Remove From Favorites":"Save As Favorites"}</button>
                    <ul>
                        {ingredients}
                    </ul>
                </div>
            </div>
            }
        </div>
    )
}

export default Details
