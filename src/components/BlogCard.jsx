import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { CardMedia, Stack, Box } from '@mui/material';


function BlogCard(props) {
    //   const { post } = props;

    return (
        <CardActionArea component="a" href="#">
            <Card sx={{ display: 'flex', borderRadius: '6px' }}>
                <CardMedia
                    component="img"
                    sx={{ maxWidth: 200, borderRadius: '6px' }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
                // image={post.image}
                // alt={post.imageLabel}
                />
                <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                        {/* {post.title} */}
                        Title
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {/* {post.date} */}
                        20th Nov 2023
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        {/* {post.description} */}
                        Nature, in the broadest sense, is the physical world or universe.
                    </Typography>
                    <Stack direction="row">
                        <Typography variant="subtitle1" color="primary">
                            Continue reading...
                        </Typography>
                        <Box flex={2}></Box>
                        <Typography variant="subtitle1" color="primary">
                            Author: Priyaranjan Mantri
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </CardActionArea>
    );
}

// BlogCard.propTypes = {
//   post: PropTypes.shape({
//     date: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     imageLabel: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default BlogCard;