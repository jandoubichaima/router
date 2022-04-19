import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Description({movies}) {
 let {id}= useParams();
 let nav=useNavigate();
  return (
    <div>Description movie
      {movies.filter((movie)=>movie.id==id).map((el)=>
      <div>
        {el.description}
       { el.trailer}
       <button onClick={()=>nav("/Home")}>{""}go back{""}</button>

      </div>)}
    </div>
  )
}

export default Description