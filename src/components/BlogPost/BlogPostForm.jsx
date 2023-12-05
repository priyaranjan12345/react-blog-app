import { useState } from 'react'
import { Box, Container, Paper, TextField, Stack, Button, Typography, Grid, FormControlLabel, Checkbox } from '@mui/material'
import UploadImageButton from './UploadImageButton'
import BlogTypeButton from './BlogTypeButton'

function BlogPostForm() {
    const [image, setImage] = useState(null)

    const onImageSelect = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    return (
        <Box sx={{ flexGrow: 1, pl: 8 }}>
            <Container sx={{ paddingBottom: 4 }}>
                <Typography component="h2" variant="h5">
                    Blog Post
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    username
                </Typography>
            </Container>
            <Container maxWidth="lg">
                <Paper elevation={1} sx={{ margin: 1, padding: 1 }}>
                    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                        <Grid item xs={12} md={8}>
                            <Stack direction='column' spacing={2} alignItems='stretch' >
                                <TextField id="outlined-basic" label="Blog Title" variant="outlined" fullWidth />
                                <TextField id="outlined-basic" label="Blog Description" variant="outlined" rows={4} fullWidth multiline />
                                <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                                    <Grid item xs={12} md={4}>
                                        <BlogTypeButton />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox name="isChecked" />
                                            }
                                            label="Writing completed"
                                        />
                                    </Grid>
                                </Grid>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <Stack
                                direction='column'
                                spacing={2}
                                padding={2}
                                alignItems='center'
                                sx={{ borderStyle: 'solid', borderWidth: 1, borderColor: '#bdbdbd' }}>
                                {!image && <Typography variant="subtitle1" color="text.secondary">
                                    Select blog image
                                </Typography>}
                                {image && <img alt="preview image" src={image} width="300" height="400" />}
                                <UploadImageButton onChange={onImageSelect} />
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
                        <Button variant="contained">Post</Button>
                    </Box>
                </Paper>
            </Container>
        </Box>
    )
}

export default BlogPostForm