/* eslint-disable react/prop-types */

import { TextField } from '@mui/material';
import React, { useId } from 'react'

const InputComponent = React.forwardRef(
    function InputComponent({
        label,
        type = "text",
        ...props
    }, ref) {
        const id = useId()
        return (
            <div>
                <TextField 
                id={id} 
                variant="outlined" 
                label={label} 
                placeholder='Enter Your Email' 
                type={type} 
                ref={ref} 
                {...props} 
                />
            </div>
        );
    }
)

export default InputComponent