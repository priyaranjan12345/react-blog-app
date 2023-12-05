import { Grid, Container, Box, Typography } from '@mui/material'
import MainFeaturedPost from '../components/MainFeaturedPost'
import BlogCard from '../components/BlogCard'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import blogService from '../service/BlogService'

function MyBlogPage() {
    const [blogs, setBlogs] = useState([])
    const username = useSelector(state => state.auth.userData)

    useEffect(() => {
        blogService.getMyBlogs()
            .then((response) => {
                const data = response.data;
                console.log(data);
                setBlogs(data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <Box sx={{ flexGrow: 1, pl: 8 }}>
            <Container maxWidth="lg">
                <Container sx={{ paddingBottom: 4 }}>
                    <Typography component="h2" variant="h5">
                        My Blog Posts
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {username}
                    </Typography>
                </Container>
                <MainFeaturedPost />
                <Grid container spacing={4}>
                    {
                        blogs.map(
                            (blog, index) => (
                                <Grid key={index} item xs={12} md={6}>
                                    <BlogCard post={blog} />
                                </Grid>
                            )
                        )
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default MyBlogPage