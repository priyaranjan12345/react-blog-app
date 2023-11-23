/* eslint-disable react/prop-types */

import { TextField } from '@mui/material';
import React, { useId } from 'react'

const InputComponent = React.forwardRef(
    function InputComponent({
        label = '',
        placeholder = '',
        type = "text",
        value = '',
        ...props
    }, ref) {
        const id = useId()
        return (
            <div>
                <TextField 
                id={id} 
                variant="outlined" 
                label={label} 
                placeholder={placeholder}
                type={type} 
                ref={ref} 
                value={value}
                {...props} 
                />
            </div>
        );
    }
)

export default InputComponent