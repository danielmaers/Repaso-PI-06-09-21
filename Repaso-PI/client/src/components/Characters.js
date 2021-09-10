import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters } from '../redux/actions'
const Characters = () => {
    const characters = useSelector(state=> state.characters)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllCharacters())

  },[dispatch]);
    return (
        <div>
            {characters.length
            ?
            characters.map((e,i)=>{
              return(
              <div key={i} >   
                <img width="100" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>{e.status}</p>
              </div>)
            }): <span> ANDA A TU CASAAAA</span>}
        </div>
    )
}

export default Characters;
