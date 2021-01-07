import styled from "styled-components";

export const Button = styled.a.attrs(props => ({
    color: props.color || props.theme.colors.gradient,
    size: props.size || props.theme.sizes.buttonNormal
}))`
    color: ${props => props.theme.colors.textItem};
    cursor: pointer;
    border-radius: 10px;
    padding: ${props => props.size};
    background:  ${props => props.color};
    font-weight: ${props => props.theme.fonts.medium};
`;

export const ButtonTextInput = styled(Button)`
    border-radius: 0 ${props => props.theme.sizes.borderRadius} 
                ${props => props.theme.sizes.borderRadius} 0;
    width: 141px;
`;