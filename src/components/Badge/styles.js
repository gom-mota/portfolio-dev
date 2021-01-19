import styled from 'styled-components';

export const Item = styled.p.attrs(props => ({
    color: props.color || props.theme.colors.backgroundItem,
    size: props.size || props.theme.sizes.badgeNormal,
    border: props.border || props.theme.colors.accent.gradient,
}))`
        padding:  ${props => props.size};
        border-radius: ${props => props.theme.sizes.borderRadius};
        border: 1px solid transparent;
        background: linear-gradient(${props => props.color},${props => props.color}) 
                padding-box, ${props => props.border};
        box-shadow: ${props => props.theme.effects.shadow}; 
        height: fit-content;
        
        
        
`;