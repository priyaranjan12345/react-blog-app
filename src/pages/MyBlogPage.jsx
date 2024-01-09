import {
    Grid, Container, Box, Typography
} from '@mui/material'
import MainFeaturedPost from '../components/MainFeaturedPost'
import MyBlogCard from '../components/MyBlogs/MyBlogCard'
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

    const deleteMyBlog = async (id) => {
        // call delete blog api
        // on success : myBlogs();
        // on error show toast

        try {
            await blogService.deleteBlog(id);
            await myBlogs();
        } catch (error) {
            console.log("error on delete: ",error);
        }
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
                                    <MyBlogCard post={blog} onDelete={deleteMyBlog}/>
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