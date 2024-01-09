import React, { useState } from 'react'
import {
    Box, Container, Paper, TextField,
    Stack, Button, Typography, Grid, FormControlLabel,
    Checkbox, Snackbar, IconButton, CircularProgress
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import UploadImageButton from './UploadImageButton'
import BlogTypeButton from './BlogTypeButton'
import { useForm } from 'react-hook-form'
import blogService from '../../service/BlogService'

function BlogPostForm() {
    const { register, handleSubmit, setValue } = useForm();
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false)

    const [snackbarData, setOpen] = useState({
        open: false,
        message: ""
    });

    const closeSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const openSnackBar = (message) => {
        setOpen({
            open: true,
            message: message
        });
    }

    const handleChange = (e) => {
        setValue('blogType', e.target.value)
        console.log(e.target.value);
    }

    const onImageSelect = (event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            setImage(URL.createObjectURL(file));
        }
    }

    const handleBlogPost = async (data) => {
        console.log(data);
        setLoading(true)
        try {
            const response = await blogService.createBlog(data);
            openSnackBar("Blog posted with id: " + response.data.blogId);
        } catch (error) {
            console.log("blog post error: " + error);
            openSnackBar("Unable to post blog, try again");
        } finally {
            setLoading(false);
        }
    }

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={closeSnackBar}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <Box sx={{ flexGrow: 1, pl: 8, width: '100%px' }}>
            <Container sx={{ paddingBottom: 4 }}>
                <Typography component="h2" variant="h5">
                    Blog Post
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Share and Express your ideas through your blogs.
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
                                            <BlogTypeButton {...register("blogType", { required: true, onChange: handleChange })} />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <FormControlLabel id='checkboxLabel'
                                                control={<Checkbox
                                                    id='blogCompleted'
                                                    name="blogCompleted"
                                                    {...register("blogCompleted", { required: true })} />}
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
                            {
                                loading && <Button disabled variant="contained" color="primary">
                                    <CircularProgress variant="indeterminate" color='inherit' size={20} sx={{ marginRight: 1 }} />
                                    Loading…
                                </Button>
                            }
                            {!loading && <Button type='submit' variant="contained" color="primary"> Post </Button>}
                        </Box>
                    </Paper>
                </form>
            </Container>
            <Snackbar
                open={snackbarData.open}
                autoHideDuration={2000}
                message={snackbarData.message}
                onClose={closeSnackBar}
                action={action}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            />
        </Box>
    )
}

export default BlogPostForm