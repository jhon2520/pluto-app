import React from 'react'

const InputForm = ({type="date",name,value,onChange,onKeyPress}) => {
    return (
        <input 
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        min="01-01-1920"
        max="01-01-2050"
        onKeyPress={onKeyPress}
        
        />
    )
}

export default React.memo(InputForm)