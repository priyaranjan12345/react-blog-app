import { Grid, Container, Box, Typography } from '@mui/material'
import MainFeaturedPost from '../components/MainFeaturedPost'
import BlogCard from '../components/BlogCard'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import blogService from '../service/BlogService'

const enumObj = {
    LOADING: "loading",
    SUCCESS: "sucess",
    ERROR: "error"
}

Object.freeze(enumObj);

enumObj.fixed

function MyBlogPage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const username = useSelector(state => state.auth.userData);

    const myBlogs = async () => {
        try {
            const response = await blogService.getMyBlogs();
            setBlogs(response.data)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    const deleteMyBlog = () => {
        // call delete blog api
        // on success : myBlogs();
        // on error show toast
    }

    useEffect(() => {
        myBlogs();
    }, [])

    return (
        <Box sx={{ flexGrow: 1, pl: 8 }}>
            <Container maxWidth="lg">
                <Container sx={{ paddingBottom: 4 }}>
                    <Typography component="h2" variant="h5">
                        My Blog Posts
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {"Username: " + username}
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