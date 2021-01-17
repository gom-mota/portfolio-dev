import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import { Default, White } from '../styles/theme';

function MyApp({ Component, pageProps }) {
    return (
        <>
        <title>Gabriel Mota - PortfolioDEV</title>
        <ThemeProvider theme={Default}>            
            <Component { ...pageProps } />
            <GlobalStyle />
        </ThemeProvider>
        </>
    )
}

export default MyApp;