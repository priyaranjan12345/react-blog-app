import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React from 'react';

const BlogTypeButton = React.forwardRef(function BlogTypeButton({ ...props }, ref) {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Blog Access Type</FormLabel>
            <RadioGroup
                aria-label="blog-access-type"
                defaultValue="PUBLIC"
                {...props}
                ref={ref}>
                <FormControlLabel value="PRIVATE" control={<Radio />} label="Private" />
                <FormControlLabel value="PUBLIC" control={<Radio />} label="Public" />
            </RadioGroup>
        </FormControl>
    )
})

export default BlogTypeButton