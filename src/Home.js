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
import axios from 'axios';
import {useEffect} from "react";
import backend_url from "./vars"



const theme = Theme()

export default function Home() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [items, setItems] = React.useState([]);
    const [quote, setQuote] = React.useState({});

    useEffect(() => {
        (async ()=>{
                console.log('rerender')
                axios.get('http://d613-87-116-175-21.ngrok.io/items').then(res => {
                    setItems(res.data);

                })

        })()

    }, []);


    useEffect(() => {
        (async ()=>{
            console.log('rerender')
            axios.get('http://d613-87-116-175-21.ngrok.io/quote').then(res => {
                setQuote(res.data);
            })

        })()

    }, []);

    const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    if(quote.text !== undefined) {
       items.splice(5, 0, {
                "_id": "quote",
                "created_by": {
                    "_id": "622dbe95d5c1478b8340db05",
                    "rating": -1,
                    "first_name": "",
                    "last_name": "",
                    "phone": "060 664 7525",
                    "email": "nicholas7@yahoo.com",
                    "username": "",
                    "password": "$2b$10$E8ppkP5xQuwKbjmC.NdWg.fdYmo/9nKasHB70kWbW7ExQqBcxY0Ie",
                    "clothes": [
                        "622dbe9c95bbf2b78aafa0f1",
                        "622dbe9c95bbf2b78aafa10f",
                        "622dbe9d95bbf2b78aafa12d"
                    ],
                    "messages": [],
                    "__v": 0
                },
                "description": "Fun fact",
                "size": "",
                "media": "https://etgroup.cz/wp-content/uploads/2017/11/Collection-Textile.png",
                "liked": false,
                "categories": [`${quote.text}`]
                ,
                "date_created": "2022-03-13T09:51:24.834Z",
                "date_modified": "2022-03-13T09:51:24.834Z",
                "__v": 0
            }
        );

    }
    if(items.length > 13){
        items.splice(9, 1);
    }

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
    console.log(items)

        return (
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                    <Toolbar>
                            <IconButton color="inherit" aria-label="open drawer">
                                <HomeIcon onClick={handleHome} />
                            </IconButton>
                        <StyledFab color="secondary" aria-label="add" onClick={() => navigate('/add-item')}>
                            <AddIcon />
                        </StyledFab>
                        <Box sx={{ flexGrow: 1 }} />
                        <IconButton color="inherit">
                            <NotificationsIcon />
                        </IconButton>
                        <IconButton color="inherit">
                                    <AccountCircle />
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

                            {/*{items == null ?<div/>:CustomCard(items[0])}*/}
                            {/*{items.length === 0 && <p>No items left.</p>}*/}


                            {/*{items == null ? "" : CustomCard(items[0])}*/}

                            {/*{items.map((item) => (<CustomCard props=c))}*/}
                            {/*{CustomCard(items != null?items[1]:null)}*/}


                            {/*{CustomCard(items != null?items[0]:null)}*/}

                            {cards.map((card) => CustomCard(items != null? items[card]:null,card))}


                            {/*{items.map(x => (<CustomCard data={x}/>))}*/}
                            {/*{items!=null?items.map(x => CustomCard(x)):<div/>}*/}
                            {/*{CustomCard(items[0])}*/}
                            {/*{items.map(x => CustomCard(items != null?x:null)) }*/}

                            {/*{items.length > 0 && items.map((card => CustomCard(card)))}*/}

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