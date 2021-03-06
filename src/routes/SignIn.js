import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Theme from "../Theme.js";

import PropTypes from 'prop-types';


import Background from "../img/p1.jpg";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

import {render} from "react-dom";
import host_url from "../vars"

const theme = Theme();

async function loginUser(credentials) {
    return fetch('http://d613-87-116-175-21.ngrok.io/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function SignInSide() {
    const [failed, setFailed] = useState(false);

    const navigate = useNavigate()

    const textInput = React.useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        /*
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
         */
        const data = new FormData(event.currentTarget);
        const response = await loginUser({
            username: data.get('username'),
            password: data.get('password')
        });
        if (response.success) {
            localStorage.setItem('user', JSON.stringify(response.user));
            localStorage.setItem('token', JSON.stringify(response.token));
            setFailed(false);
            navigate(0);

        }else{
            setFailed(true);
            textInput.current.value = "";
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${Background})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h4" color={theme.palette.primary.dark} sx={{mb: 3}}>
                            reCloth
                        </Typography>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Prijavi se
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Korisni??ko ime"
                                name="username"
                                autoFocus
                                inputRef={input => input && failed && input.focus()}
                                helperText={failed ? 'Pogre??na kombinacija korisni??kog imena ili lozinke!' :''}
                                error={failed}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Lozinka"
                                type="password"
                                id="password"
                                error={failed}
                                inputRef={textInput}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                <Typography >
                                    Prijavi se
                                </Typography>

                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href="/sign-up" variant="body1">
                                        {"Nema?? nalog? Napravi nalog"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
