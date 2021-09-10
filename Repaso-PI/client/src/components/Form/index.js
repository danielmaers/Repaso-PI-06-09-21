import React, { useState } from 'react'
import {useDispatch, useSelector, } from'react-redux'
import {useHistory } from 'react-router-dom'
import {createCharacter } from '../../redux/actions'

function Form() {
    const episodes = useSelector(state=> state.episodes)
    const dispatch = useDispatch()
    const history = useHistory()
    const [values,setValues] = useState({
        name:"",
        status:"",
        image:"",
        episodes:[]
    })

    const handleOnChange = (e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleOnChangeSelect = (e)=>{
       if(values.episodes.includes(e.target.value)){
        setValues({
            ...values,
            episodes: values.episodes.filter(ep=> ep !== e.target.value)
        })
       }else{
           setValues({
               ...values,
               episodes: [...values.episodes, e.target.value]
           })
       }
        
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        dispatch(createCharacter(values))
        setValues({
            name:"",
            status:"",
            image:"",
            episodes:[]
        })
        
        history.push("/main")
    }
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="">Nombre: </label>
            <input name="name" value={values.name} onChange={handleOnChange}/>
            <label htmlFor="">Estado: </label>
            <input name="status"value={values.status} onChange={handleOnChange}/>
            <label htmlFor="">Imagen: </label>
            <input name="image" value={values.image} onChange={handleOnChange}/>

            <select onChange={handleOnChangeSelect} name="episodes" multiple>
                {
                    episodes.length &&  episodes.map((e,i)=> <option key={e[0].id} value={e[0].id}>{e[0].name}</option>)
                }
            </select>
            <button type="submit" >Enviar</button>
        </form>
    )
}

export default Form
