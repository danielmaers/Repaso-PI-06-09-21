import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters, sortCharacters } from '../redux/actions';
import { Link, useHistory } from "react-router-dom";

const Characters = () => {
  const characters = useSelector(state=> state.characters)
  const dispatch = useDispatch()
  const history = useHistory()
  const [page, setPage] = useState(1)

  useEffect(()=>{
    
    dispatch(getAllCharacters(1))

  },[dispatch]);

  function handleChange(e){
    if(e.target.value==="default") dispatch(getAllCharacters(1))
    else dispatch(sortCharacters(e.target.value))
    history.push("/main")
  }

  function pagination(e){
    if(e.target.value==="next") {
      dispatch(getAllCharacters(page+1))
      setPage(page+1);
      history.push("/main")
    }
    else {
      dispatch(getAllCharacters(page-1))
      setPage(page-1);
      history.push("/main")
    }
  }

    return (

        <div>
          <select onChange={handleChange}>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
            <option value="default">default</option>
          </select>
            {characters.length
            ?
            characters.map((e,i)=>{
              return(
              <div key={i} >   
                <img width="100" src={e.image} alt="" />
               <Link to={`/detail/${e.id}`} > <p>{e.name}</p> </Link>
                <p>{e.status}</p>
              </div>)
            }): <span> ANDA A TU CASAAAA</span>}
            <button onClick={pagination} value="previous" disabled={page===1} >⏪</button>
            <button onClick={pagination} value="next" disabled={characters.length < 10}>⏩</button>
        </div>
    )
}

export default Characters;
