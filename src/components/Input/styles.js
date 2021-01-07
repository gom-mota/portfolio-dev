import styled from "styled-components";

export const Container = styled.div`
  display:flex; 
  box-shadow: ${props => props.theme.effects.shadow};
`;

export const Input = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "10px",
    color: props.color || props.theme.colors.inputBackground,
    border: props.border || props.theme.colors.gradientInverted,
  }))`
    border-radius: ${props => props.theme.sizes.borderRadius};
    padding: ${props => props.size};
    background: linear-gradient(${props => props.color},${props => props.color}) 
                padding-box, ${props => props.border};
    border: 1px solid transparent;
    color:#fff;
`;

  export const InputButton = styled(Input)`
    border-radius: ${props => props.theme.sizes.borderRadius}  0 0 
                  ${props => props.theme.sizes.borderRadius};
    width: 286px;
`;
  