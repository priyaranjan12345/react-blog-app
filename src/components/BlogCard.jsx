import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { CardMedia, Stack, Box } from '@mui/material';
import PropTypes from 'prop-types';

function BlogCard(props) {
    const { post } = props;

    return (
        <CardActionArea component="a" href="#">
            <Card sx={{ display: 'flex', borderRadius: '6px' }}>
                <CardMedia
                    component="img"
                    sx={{ maxWidth: 200, height: 200, borderRadius: '6px' }}
                    src={"http://localhost:8081/blog-api/v1/app/blog-image/"+post.blogImage}
                    alt={post.blogId}
                />
                <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                        {post.blogTitle}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {post.publishDate}
                    </Typography>
                    <Typography
                        sx={{
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 1,
                        }}
                        variant="subtitle1"
                        paragraph>
                        {post.blogDescription}
                    </Typography>
                    <Stack direction="column">
                        <Typography variant="subtitle1" color="primary">
                            Continue reading...
                        </Typography>
                        <Box flex={2}></Box>
                        <Typography variant="subtitle1" color="primary">
                            Author: {post.bloggerName}
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </CardActionArea>
    );
}

BlogCard.propTypes = {
    post: PropTypes.shape({
        blogId: PropTypes.number.isRequired,
        blogTitle: PropTypes.string.isRequired,
        blogDescription: PropTypes.string.isRequired,
        blogType: PropTypes.string.isRequired,
        blogImage: PropTypes.string.isRequired,
        bloggerName: PropTypes.string.isRequired,
        publishDate: PropTypes.string.isRequired,
    }).isRequired,
};

export default BlogCard;