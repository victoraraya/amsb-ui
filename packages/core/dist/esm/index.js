import Button from '@mui/material/Button';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { jsx } from 'react/jsx-runtime';

const AirMilesButton = styled(Button)({
    minWidth: 190,
    boxShadow: 'none',
});

const AirMilesTypography = styled(Typography)({});

const theme = createTheme({
    palette: {
        primary: {
            main: '#3A92E9',
        },
        text: {
            primary: '#4A4A4A',
            secondary: '#5E5E5E',
        },
        background: {
            default: '#F3F3F3',
        },
    },
    typography: {
        fontFamily: "'Open Sans', sans-serif",
        h1: {
            fontSize: '3.5rem',
            color: '#4A4A4A',
        },
        h2: {
            fontSize: '3.125rem',
        },
        h3: {
            fontSize: '3rem',
        },
        h4: {
            fontSize: '2.125rem',
        },
        h5: {
            fontSize: '1.5rem',
            color: '#5E5E5E',
        },
        h6: {
            fontSize: '1.25rem',
        },
        subtitle1: {
            fontSize: '1rem',
            color: '#5E5E5E',
        },
        subtitle2: {
            fontSize: '0.875rem',
        },
        body1: {
            fontSize: '1rem',
        },
        body2: {
            fontSize: '0.875rem',
        },
        overline: {
            fontSize: '0.75rem',
        },
    },
});
const AirMilesThemeProvider = ({ children }) => (jsx(ThemeProvider, Object.assign({ theme: theme }, { children: children })));

export { AirMilesButton as Button, AirMilesThemeProvider as ThemeProvider, AirMilesTypography as Typography };
