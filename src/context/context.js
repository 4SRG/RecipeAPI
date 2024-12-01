import { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const Context = createContext(null);

function ContextState({ children }) {
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState()
    const [detailRecipe, setDetailRecipe] = useState(null)
    const [favoriteList, setFavoriteList] = useState([])

    const navigatez = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            setLoading(true)
            const res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${search}`)
            const data = await res.json()
            setDatas(data)
            setLoading(false)
            navigatez('/')
        } catch (e) {
            console.log(e)
            setLoading(false)
            throw new Error(e)
        }
    }

    function handleFav(idz) {
        const cpyFav = [...favoriteList]
        const index = cpyFav.findIndex(a => a.recipe_id === idz.recipe_id)
        if (index === -1) {
            cpyFav.push(idz)
        }
        else {
            cpyFav.splice(index, 1)
        }
        setFavoriteList(cpyFav)
    }

    function inFav(idz){
        const cpyFav = [...favoriteList]
        const index = cpyFav.findIndex(a => a.recipe_id === idz)
        if (index === -1) {
            return false
        }
        else{
            return true
        }
        
    }

    return (
        <Context.Provider value={{ search, setSearch, datas, loading, handleSubmit, detailRecipe, setDetailRecipe, handleFav, favoriteList, inFav }}>
            {children}
        </Context.Provider>
    )
}

export default ContextState
