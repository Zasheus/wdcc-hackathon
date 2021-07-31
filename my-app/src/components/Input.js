import React from 'react'
import { Input } from 'semantic-ui-react'

const InputExampleInput = () => {
    return (
    <div>
        <Input placeholder='' /> 
        <div className = "input-details">
            <label>Assignment:</label>
            <input type = "text" placeholder ="Add Assignment"/>
        </div>  
    </div>
    
    )
}

export default InputExampleInput
