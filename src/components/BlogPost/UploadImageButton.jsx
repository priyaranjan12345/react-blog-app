import React from 'react'
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button } from '@mui/material';

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

function UploadImageButton() {
  return (
    <Button component="label" variant="outlined" startIcon={<CloudUploadIcon />}>
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>
  )
}

export default UploadImageButton