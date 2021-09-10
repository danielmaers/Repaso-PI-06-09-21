import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacterById, unmountCharacterById } from "../redux/actions";




const Detail = ({id}) => {
    const dispatch = useDispatch();
    const character = useSelector(store=> store.character);

    useEffect(()=>{
        dispatch(getCharacterById(id))
        return ()=> {dispatch(unmountCharacterById())}
      },[dispatch,id]);

    return (
        <div>
            {character.name?
            <div>
                <img src={character.image} alt={character.name} />
                <p>{character.name}</p> 
                <p>{character.status}</p>
                {character.episodes? <p>Episode {character.episodes[0].name}</p>: null }
            </div>
            :"cargando..."}
        </div>
    )
}

export default Detail
