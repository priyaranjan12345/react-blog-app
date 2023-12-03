import { Grid, Container, Box } from '@mui/material'
import MainFeaturedPost from './MainFeaturedPost'
import BlogCard from './BlogCard'

function Home() {
    return (
        <Box sx={{ flexGrow: 1, pl: 8 }}>
            <Container maxWidth="lg">
                <MainFeaturedPost />
                <Grid container spacing={4}>
                    {
                        Array.from(Array(4)).map(
                            (_, index) => (
                                <Grid key={index} item xs={12} md={6}>
                                    <BlogCard />
                                </Grid>
                            )
                        )
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default Home