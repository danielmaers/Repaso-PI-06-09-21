import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getSearchCharacters,getEpisodes } from '../../redux/actions'

function Nav() {
    const [input,setInput] = useState("")
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getEpisodes())
    },[dispatch])

    const handleInput = (event)=>{
    setInput(event.target.value)
    }
    const buscar = ()=>{
        console.log("hola")
        dispatch(getSearchCharacters(input))

    }
    return (
        <div >
            <Link to="/" > home</Link>
            <Link to="/main" > personajes</Link>
            <Link to="/create" > Crear un personaje</Link>
            <input type="text" placeholder="Busca tu personaje!" onChange={handleInput} value={input} />
            <button onClick={buscar}>Buscar</button>
        </div>
    )
}

export default Nav
