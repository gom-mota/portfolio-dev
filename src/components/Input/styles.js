import styled from "styled-components";

export const Container = styled.div`
  display:flex; 
  box-shadow: ${props => props.theme.effects.shadow};
  border-radius: ${props => props.theme.sizes.borderRadius};
`;

export const Input = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "200px",
    align: props.align || "left",
    color: props.color || props.theme.colors.backgroundItem,
    border: props.border || props.theme.colors.accent.gradientInverted,
  }))`
    border-radius: ${props => props.theme.sizes.borderRadius};
    padding: 10px;
    text-align: ${props => props.align};
    width: ${props => props.size};
    background: linear-gradient(${props => props.color},${props => props.color}) 
                padding-box, ${props => props.border};
    border: 1px solid transparent;
    color: ${props => props.theme.colors.textPrimary};
`;

  export const InputButton = styled(Input)`

    margin-right:-2px;

    border-radius: ${props => props.theme.sizes.borderRadius}  0 0 
                  ${props => props.theme.sizes.borderRadius};
    
    @media screen and (max-width: 1170px) {
      width: 210px;
    }
`;
  