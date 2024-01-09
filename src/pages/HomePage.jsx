import { Grid, Container, Box } from '@mui/material'
import MainFeaturedPost from '../components/MainFeaturedPost'
import BlogCard from '../components/BlogCard'
import { useEffect, useState } from 'react'
import blogService from '../service/BlogService'

function HomePage() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogService.getBlogs()
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
        <MainFeaturedPost />
        <Grid container spacing={4}>
          {
            blogs.map(
              (blog, index) => (
                <Grid key={index} item xs={12} md={6} >

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

export default HomePage

