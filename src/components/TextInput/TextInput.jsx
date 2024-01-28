import React, { useState } from "react";
import PropTypes from 'prop-types'

const TextInput = ({type,label,placeholder,name}) => {
  const [value,setValue] = useState("")
  const handleChange=(e)=>{
       setValue(e.target.value)
  }
  return (
    <div>
      <label htmlFor="name">{label}</label>
      <input onChange={handleChange} type={type} name={name} id="" placeholder={placeholder} value={value} />
    </div>
  );
};

export default TextInput;

TextInput.propTypes={
    name:PropTypes.string,
    type:PropTypes.string,
    label:PropTypes.string,
    placeholder:PropTypes.string
}
