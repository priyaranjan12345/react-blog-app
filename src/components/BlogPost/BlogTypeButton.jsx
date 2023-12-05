import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function BlogTypeButton() {
    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Blog Access Type</FormLabel>
            <RadioGroup
                column
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group">
                <FormControlLabel value="PRIVATE" control={<Radio />} label="Private" />
                <FormControlLabel value="PUBLIC" control={<Radio />} label="Pulic" />
            </RadioGroup>
        </FormControl>
    )
}

export default BlogTypeButton