import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body{
        background: ${props => props.theme.colors.backgroundGradient};
        color: ${props => props.theme.colors.textPrimary};
        font-family: ${props => props.theme.fonts.primary};
        font-size: ${props => props.theme.sizes.textPrimary};
        font-weight: ${props => props.theme.fonts.regular};
        -webkit-font-smoothing: antialiased !important;
    }
`;