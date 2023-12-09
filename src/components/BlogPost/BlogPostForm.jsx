import { useState } from 'react'
import { Box, Container, Paper, TextField, Stack, Button, Typography, Grid, FormControlLabel, Checkbox } from '@mui/material'
import UploadImageButton from './UploadImageButton'
import BlogTypeButton from './BlogTypeButton'
import { useForm } from 'react-hook-form'
import blogService from '../../service/BlogService'

function BlogPostForm() {
    const { register, handleSubmit, setValue } = useForm();
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        setValue('blogType', e.target.value)
        console.log(e.target.value);
    }

    const onImageSelect = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
            console.log(event.target.files[0]);
            setValue('blogImage', event.target.files[0])
        }
        console.log(event.target.files[0]);
    }

    const handleBlogPost = (data) => {
        blogService.createBlog(data)
    }

    return (
        <Box sx={{ flexGrow: 1, pl: 8, width: '100%px' }}>
            <Container sx={{ paddingBottom: 4 }}>
                <Typography component="h2" variant="h5">
                    Blog Post
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    username
                </Typography>
            </Container>
            <Container maxWidth="lg">
                <form onSubmit={handleSubmit(handleBlogPost)} id='blogPostForm'>
                    <Paper elevation={1} sx={{ margin: 1, padding: 1 }}>
                        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                            <Grid item xs={12} md={8}>
                                <Stack direction='column' spacing={2} alignItems='stretch' >
                                    <TextField
                                        id="blogTitle"
                                        label="Blog Title"
                                        variant="outlined"
                                        fullWidth
                                        {...register("blogTitle", { required: true })} />
                                    <TextField
                                        id="blogDescription"
                                        label="Blog Description"
                                        variant="outlined"
                                        rows={4}
                                        fullWidth
                                        multiline
                                        {...register("blogDescription", { required: true })} />
                                    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                                        <Grid item xs={12} md={4}>
                                            <BlogTypeButton {...register("blogType", { required: false, onChange: handleChange })} />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <FormControlLabel id='checkboxLabel'
                                                control={<Checkbox id='blogCompleted' name="blogCompleted" {...register("blogCompleted", { required: true })} />}
                                                label="Writing completed" />
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
                                    <UploadImageButton  {...register("blogImage", { required: false, onChange: onImageSelect })} />
                                </Stack>
                            </Grid>
                        </Grid>
                        <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
                            <Button type='submit' variant="contained">Post</Button>
                        </Box>
                    </Paper>
                </form>
            </Container>
        </Box>
    )
}

export default BlogPostForm