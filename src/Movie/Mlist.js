import React, { useState } from 'react'
import Mcard from './Mcard';
function Mlist({movies}) {
  return (
    <div>
        {
            movies.map((movie)=><Mcard  movie={movie}/>)
        }
    </div>
  )
}

export default Mlist