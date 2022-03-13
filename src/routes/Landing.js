import {useState} from "react";
import {useNavigate} from "react-router-dom";
import * as React from "react";
import {ThemeProvider} from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Background from "../img/p1.jpg";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Theme from "../Theme";

const theme = Theme();


export default function Landing() {


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
                        <Box sx={{ mt: 1 }}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                <Typography variant='h5' >
                                    Prijavi se
                                </Typography>

                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href="/sign-up" variant="body2">
                                        {"Nemaš nalog? Napravi nalog"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ mt: 1 }}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                <Typography variant='h5' >
                                    Prijavi se
                                </Typography>

                            </Button>
                            <Grid container>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}