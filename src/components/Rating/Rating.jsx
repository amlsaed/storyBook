import React, { useState } from 'react'
import {FaStar} from "react-icons/fa"


const Star = ({selected,onSelect})=>{
      return(
        <FaStar
        className='star'
        color={selected?"#ffcb45":"#f2f2f2"}
        onClick={onSelect}
      />
      )
}

const Rating = ({number=5,size="sm"}) => {
    const [selected,setSelected] = useState(-1)
  return (
    <div>
        {[...Array(number)].map((str,i)=>(
           <Star key={i} onSelect={()=>setSelected(i+1)} selected={i<selected}/>)
        )}
    </div>
  )
}




export default Rating