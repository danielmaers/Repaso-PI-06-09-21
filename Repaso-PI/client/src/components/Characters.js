import React from "react";
import { useSelector } from "react-redux";

const Characters = () => {
    const characters= useSelector(state=> state.characters)


    return (
        <div>
            {characters.length
            ?characters.map((e,i)=>{
              return(
              <div key={i} >   
                <img src={e.image} alt="" />
                <p>{e.name}</p>
                <p>{e.status}</p>
                <p>{e.location}</p>
              </div>)
            }): <span> ANDA A TU CASAAAA</span>}
        </div>
    )
}

export default Characters;
