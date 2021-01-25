
import GlobalStyle from '../styles/global';
import { ThemeModeProvider } from '../contexts/themeContext';

const MyApp = ({ Component, pageProps }) => {

    return (
        <>
        <title>Gabriel Mota - PortfolioDEV</title>
        <ThemeModeProvider>   
                <Component { ...pageProps } />
                <GlobalStyle />
        </ThemeModeProvider>
        </>
    )
}

export default MyApp;