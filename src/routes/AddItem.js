import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Theme from '../Theme.js'
import {FormControl, InputLabel, Select} from "@mui/material";
import FileUpload from "react-mui-fileuploader"

import { useNavigate } from "react-router-dom";

const theme = Theme();

export default function SignUp() {
    const navigate = useNavigate()

    async function add(credentials) {
        return fetch('http://d613-87-116-175-21.ngrok.io/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json())
    }

    const handleSubmit = async (event) => {
        event.preventDefault();


        // const data = new FormData(event.currentTarget);
        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password'),
        // });

        const data = new FormData(event.currentTarget);
        console.log("data.get")
        const response = await add({
            created_by: JSON.parse(localStorage.getItem("user"))._id,
            description: data.get('description'),
            size: data.get('size'),
            media: data.get('url'),
            categories: [data.get('category')]
        });
        navigate('/');
    };

    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Dodaj krpicu

                    </Typography>

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            {/*<Grid item xs={12}>*/}
                            {/*    <FileUpload*/}
                            {/*        multiFile={false}*/}
                            {/*        disabled={true}*/}
                            {/*        leftLabel=""*/}
                            {/*        header=""*/}
                            {/*        title=""*/}
                            {/*        rightLabel="za biranje slike"*/}
                            {/*        buttonLabel="klikni ovde"*/}
                            {/*        maxFileSize={10}*/}
                            {/*        maxUploadFiles={0}*/}
                            {/*        maxFilesContainerHeight={357}*/}
                            {/*        allowedExtensions={['jpg', 'jpeg', 'png']}*/}
                            {/*        bannerProps={{ elevation: 0, variant: "outlined" }}*/}
                            {/*        containerProps={{ elevation: 0, variant: "outlined" }}*/}
                            {/*    />*/}
                            {/*</Grid>*/}
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="description"
                                    required
                                    fullWidth
                                    id="description"
                                    label="Opis"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <InputLabel id="demo-simple-select-standard-label">Kategorija</InputLabel>
                                <FormControl fullWidth>
                                <Select
                                    labelId="category"
                                    required
                                    name="category"
                                    id="category"
                                    value={category}
                                    label="Kategorija"
                                    fullWidth
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"Pantalone"}>Pantalone</MenuItem>
                                    <MenuItem value={"Majice"}>Majice</MenuItem>
                                    <MenuItem value={"Duksevi"}>Duksevi</MenuItem>
                                    <MenuItem value={"Dzemperi"}>Dzemperi</MenuItem>
                                    <MenuItem value={"Jakne"}>Jakne</MenuItem>
                                    <MenuItem value={"Kaputi"}>Kaputi</MenuItem>
                                    <MenuItem value={"Aksesoari"}>Aksesoari</MenuItem>
                                </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="size"
                                label="Veličina"
                                name="size"
                            />
                        </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="url"
                                    label="URL do slike"
                                    name="url"
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Dodaj
                        </Button>

                        <Button
                            color="secondary"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 0, mb: 2 }}
                            onClick={() => navigate('/')}
                        >
                            Odustani
                        </Button>
                    </Box>

            </Box>
            </Container>
        </ThemeProvider>
    );
}