import GlobalStyle from "../styles/global";
import { ThemeModeProvider } from "../contexts/themeContext";

const MyApp = ({ Component, pageProps }) => {
    return (
        <ThemeModeProvider>
            <Component {...pageProps} />
            <GlobalStyle />
        </ThemeModeProvider>
    );
};

export default MyApp;
