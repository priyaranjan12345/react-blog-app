import Paper from '@mui/material/Paper';
import { Grid, Box, Typography } from '@mui/material';

function MainFeaturedPost() {

    return (
        <Paper
            sx={{
                margin: 'auto',
                height: '44vh',
                position: 'relative',
                justifyContent: "center",
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                overflow: 'hidden'
            }}
        >
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                            position: 'absolute',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            Explore What You Want
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            Description
                        </Typography>

                    </Box>
                </Grid>
            </Grid>
            <img
                src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
                alt="bgImage"
                style={{
                    width: '100%',
                    height: '100%'
                }} />
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.2)',
                }}
            />
        </Paper>
    );
}

export default MainFeaturedPost;