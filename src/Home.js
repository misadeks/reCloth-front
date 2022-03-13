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
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Theme from "./Theme";
import CustomCard from './Card';



const cards = [1, 2, 3, 4, 5];

const theme = Theme()

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Checkroom sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap>
                        reCloth
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}

                <Container sx={{ py: 8 }} maxWidth="md">
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
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}