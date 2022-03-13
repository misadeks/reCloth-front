import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import FlagIcon from '@mui/icons-material/Flag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Grid from "@mui/material/Grid";
import * as React from "react";
import {styled} from "@mui/material";
import Theme from "./Theme";
import SimpleSnackbar from "./Snackbar";


const theme = Theme()

export default function CustomCard(props){
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
        navigator.clipboard.writeText(props.permalink);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return(
        <Grid item key={props.id} xs={12} sm={12} md={6}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: theme.palette.secondary.main}} aria-label="recipe">
                        {props.user.username.toUpperCase()[0]}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <FlagIcon />
                    </IconButton>
                }
                title={props.user.username}
                subheader={props.user.user_likes + " ❤"}
            />
            <CardMedia
                component="img"
                height="300em"
                image={props.photo_url}
                alt="krpica"
            />
            <CardContent  sx={{ flexGrow: 1 }}>
                <Typography variant="h5" color="text.secondary">
                    Krpica
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="like">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share"  onClick={
                    handleClick
                }>
                    <Snackbar
                        open={open}
                        autoHideDuration={1000}
                        onClose={handleClose}
                        message="Link ka krpici je kopiran!"
                    />
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
        </Grid>
        );
}


