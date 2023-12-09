import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormLabel, Box } from '@mui/material';
import React, { useState } from 'react';
import { FormGroup } from '@mui/material';

const BlogTypeButton = React.forwardRef(function BlogTypeButton({ ...props }, ref) {
    const [value, setValue] = useState("PUBLIC")
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <FormGroup>
            <FormLabel> Select Blog Type</FormLabel>
            {
                ["PRIVATE", "PUBLIC"].map(
                    (option, index) => (
                        <Box key={index}>
                            <FormControlLabel
                                {...props}
                                ref={ref}
                                label={option}
                                control={<Radio
                                    value={option}
                                    checked={value == option}
                                    onChange={handleChange}
                                />}
                            />
                        </Box>
                    )
                )
            }
        </FormGroup>
        // <FormControl component="fieldset">
        //     <FormLabel component="legend">Blog Access Type</FormLabel>
        //     <RadioGroup
        //         aria-label="blog-access-type"
        //         defaultValue="PUBLIC"
        //         {...props}
        //         ref={ref}>
        //         <FormControlLabel value="PRIVATE" control={<Radio />} label="Private" />
        //         <FormControlLabel value="PUBLIC" control={<Radio />} label="Public" />
        //     </RadioGroup>
        // </FormControl>
    )
})

export default BlogTypeButton