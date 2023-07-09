import { createTheme } from '@mui/material/styles';
import {green, grey, blue} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: green[500],
            light: green[300],
            dark: green[700],
        },
        secondary: {
            main: '#0d47a1',
            light: '#093170',
            dark: '#3d6bb3',
        },
        background: {
            default: grey[300], // lighter shade
            paper: grey[200], // even lighter shade
        },
    },
    typography: {
        body1: {
            color: 'white',
            fontSize: '1.5rem',
        },
        body2: {
            color: 'black',
            fontSize: '1.3rem',
        },
    },
});

export default theme;
