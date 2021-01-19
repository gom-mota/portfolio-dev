import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import { DarkTheme, LightTheme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
    return (
        <>
        <title>Gabriel Mota - PortfolioDEV</title>
        <ThemeProvider theme={DarkTheme}>            
            <Component { ...pageProps } />
            <GlobalStyle />
        </ThemeProvider>
        </>
    )
}

export default MyApp;