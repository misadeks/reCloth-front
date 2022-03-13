import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Checkroom from '@mui/icons-material/Checkroom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Theme from "./Theme";
import CustomCard from './Card';
import IconButton from "@mui/material/IconButton";
import MenuItem from '@mui/material/MenuItem';
import {Menu, styled, Tooltip} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import {AccountCircle} from "@mui/icons-material";


const cards = [1, 2, 3, 4, 5];


const theme = Theme()

export default function Home() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const navigate = useNavigate()

    const StyledFab = styled(Fab)({
            position: 'absolute',
            zIndex: 1,
            top: -30,
            left: 0,
            right: 0,
            margin: '0 auto',
        });

    const handleLogOut = () => {
        localStorage.clear();
        navigate(0);
    };

    const handleHome = () => {
        navigate(0);
    };

        return (
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                    <Toolbar>
                            <IconButton color="inherit" aria-label="open drawer">
                                <HomeIcon onClick={handleHome} />
                            </IconButton>
                        <IconButton color="inherit" aria-label="open drawer">
                            <FavoriteIcon />
                        </IconButton>
                        <StyledFab color="secondary" aria-label="add">
                            <AddIcon />
                        </StyledFab>
                        <Box sx={{ flexGrow: 1 }} />
                        <IconButton color="inherit">
                            <NotificationsIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    //onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                        </IconButton>
                        <IconButton color="inherit" onClick={handleLogOut}>
                            <LogoutIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <main>
                    {/* Hero unit */}

                    <Container sx={{py: 2}} maxWidth="md">
                        {/* End hero unit */}
                        <Grid container spacing={4}>

                            {cards.map((card) => (
                                CustomCard({
                                    id: 121,
                                    name: "test",
                                    description: "Ovo je krpica!",
                                    permalink: "dknakfj",
                                    photo_url: "https://source.unsplash.com/random",
                                    user: {
                                        username: "ana",
                                        user_likes: 120
                                    }
                                })
                            ))}
                        </Grid>
                    </Container>
                </main>


                {/* Footer */}
                <Box sx={{bgcolor: 'background.paper', p: 6}} component="footer">
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                        component="p"
                    >
                    </Typography>
                </Box>
                {/* End footer */}
            </ThemeProvider>
        );
    };