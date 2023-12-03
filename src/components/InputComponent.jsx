/* eslint-disable react/prop-types */

import { TextField } from '@mui/material';
import React, { useId } from 'react'

const InputComponent = React.forwardRef(
    function InputComponent({
        label = '',
        placeholder = '',
        type = "text",
        ...props
    }, ref) {
        const id = useId()
        return (
                <TextField 
                id={id} 
                variant="outlined" 
                label={label} 
                placeholder={placeholder}
                type={type} 
                ref={ref} 
                fullWidth
                {...props} 
                />
        );
    }
)

export default InputComponent