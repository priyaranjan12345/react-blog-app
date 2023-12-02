import { Grid, Container } from '@mui/material'
import MainFeaturedPost from './MainFeaturedPost'
import BlogCard from './BlogCard'



function Home() {
    return (
        <div style={{ marginTop: 100 }}>

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
        </div>
    )
}

export default Home