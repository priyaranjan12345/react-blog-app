import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import {
    CardMedia, Stack, Box, IconButton, Menu, MenuItem, Dialog, DialogTitle,
    DialogContentText, DialogActions, DialogContent, Button
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ITEM_HEIGHT = 48;

function MyBlogCard(props) {
    const { post } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const [openDialog, setOpen] = useState(false);
    const openMenu = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        event.stopPropagation();
        event.preventDefault()
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = (event) => {
        setAnchorEl(null);
        if (event.target.id == 'Delete') {
            // do delete
            handleClickOpenDialog();
        } else if (event.target.id == 'Edit') {
            // do edit
        }
    };

    const handleClickOpenDialog = () => {
        setOpen(true);
    };

    const handleCloseDialog = (id) => {
        setOpen(false);
        props.onDelete(id);
    };

    return (
        <CardActionArea component="a" href="#">
            <Card sx={{ display: 'flex', borderRadius: '6px' }}>
                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleMenuOpen}
                    sx={{ position: 'absolute', top: 1, right: 1 }}
                >
                    <MoreVertIcon />
                </IconButton>
                <CardMedia
                    component="img"
                    sx={{ maxWidth: 200, height: 200, borderRadius: '6px' }}
                    src={"http://localhost:8081/blog-api/v1/app/blog-image/" + post.blogImage}
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
                <Menu
                    id="long-menu"
                    MenuListProps={{
                        'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleCloseDialog}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                        },
                    }}
                >
                    {["Edit", "Delete"].map((option) => (
                        <MenuItem key={option} onClick={handleMenuClose} id={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </Card>
            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want delete &quot;{post.blogTitle}&quot; ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>
                        No
                    </Button>
                    <Button onClick={() => handleCloseDialog(post.blogId)} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </CardActionArea>
    );
}

MyBlogCard.propTypes = {
    post: PropTypes.shape({
        blogId: PropTypes.number.isRequired,
        blogTitle: PropTypes.string.isRequired,
        blogDescription: PropTypes.string.isRequired,
        blogType: PropTypes.string.isRequired,
        blogImage: PropTypes.string.isRequired,
        bloggerName: PropTypes.string.isRequired,
        publishDate: PropTypes.string.isRequired,
    }).isRequired,

    onDelete: PropTypes.func.isRequired,
};

export default MyBlogCard;