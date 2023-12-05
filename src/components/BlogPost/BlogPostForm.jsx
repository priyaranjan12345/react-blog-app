import { } from 'react'
import { Box, Container, Paper, TextField, Stack, Button, Typography, Grid, FormControlLabel, Checkbox } from '@mui/material'
import UploadImageButton from './UploadImageButton'
import BlogTypeButton from './BlogTypeButton'

function BlogPostForm() {
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
                                alignItems='center'
                                sx={{ borderStyle: 'solid', borderWidth: 1, borderColor: '#bdbdbd' }}>
                                <Typography variant="subtitle1" color="text.secondary">
                                    Select blog image
                                </Typography>
                                <UploadImageButton />
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
                        <Button variant="contained">Post a blog</Button>
                    </Box>
                </Paper>
            </Container>
        </Box>
    )
}

export default BlogPostForm