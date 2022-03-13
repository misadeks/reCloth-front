import { createTheme, ThemeProvider } from '@mui/material/styles';
import { teal, red } from '@mui/material/colors';

export default function Theme() {
    return createTheme({
        palette: {
            primary: {
                main: teal["A400"],
            },
            secondary: {
                main: red["A100"],
            },
        },
    });
}
