import React, { useState } from 'react'
import { Button } from '../Buttons/Button'
import PropTypes from 'prop-types';

export const Counter = ({color}) => {
    let [count,setCount] = useState(0)

    const handleClick = (type)=>{
        if(type==="add"){
            setCount(count++)
        }else{
            setCount(count--)
        }
    }
  return (
    <div>
        <h4 style={{color}}>count equal {count}</h4>
        <Button label={"Add"} onClick={()=>{handleClick("add")}} primary={true}  backgroundColor={"#3333"} size={30}/>
        <Button label={"Sub"} onClick={()=>{handleClick("Sub")}} primary={true}  backgroundColor={"#3333"} size={30}/>
    </div>
  )
}


Counter.propTypes={
    color:PropTypes.string,
}

