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
import {render} from "react-dom";

const theme = Theme();

async function loginUser(credentials) {
    return fetch('http://709c-87-116-175-15.ngrok.io/users/login', {
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
            navigate('/');

        }else{
            setFailed(true);
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
                                label="Korisničko ime"
                                name="username"
                                autoFocus
                                inputRef={input => input && failed && input.focus()}
                                helperText={failed ? 'Pogrešna kombinacija korisničkog imena ili lozinke!' :''}
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
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Zapamti me"
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
                                    <Link href="#" variant="body2">
                                        {"Nemaš nalog? Napravi nalog"}
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
