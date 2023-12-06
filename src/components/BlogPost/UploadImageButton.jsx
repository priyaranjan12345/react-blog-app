import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function UploadImageButton({...props}) {
  return (
    <Button component="label" variant="outlined" startIcon={<CloudUploadIcon />}>
      Upload file
      <VisuallyHiddenInput
        type="file"
        accept='image/png. image/jpg, image/jpeg'
        {...props}
         />
    </Button>
  )
}

// UploadImageButton.defaultProps = {
//   onChange: () => { },
// };

// UploadImageButton.propTypes = {
//   onChange: PropTypes.func.isRequired,
// };


export default React.forwardRef(UploadImageButton)