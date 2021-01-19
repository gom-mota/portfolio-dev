import styled from "styled-components";

export const Button = styled.a.attrs(props => ({
    color: props.color || props.theme.colors.accent.gradient,
    size: props.size || props.theme.sizes.buttonNormal
}))`
    color: ${props => props.theme.colors.textButton};
    cursor: pointer;
    border-radius: ${props => props.theme.sizes.borderRadius};
    padding: ${props => props.size};
    background:  ${props => props.color};
    font-weight: ${props => props.theme.fonts.medium};
`;

export const ButtonTextInput = styled(Button)`
    border-radius: 0 ${props => props.theme.sizes.borderRadius} 
                ${props => props.theme.sizes.borderRadius} 0;
    width: 141px;

    i{
        display: none;
    }
    
    @media screen and (max-width: 1170px) {
        width: 60px;
        p{
            display: none;
        }
        i{
            display: block;
        }
    }
`;