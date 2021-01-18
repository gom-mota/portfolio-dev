import styled from 'styled-components';


export const Main = styled.div.attrs(props => ({
    color: props.color || props.theme.colors.background,
    size: props.size || props.theme.sizes.cardNormal,
}))`
    ${props => props.size};
    background: ${props => props.color};
    box-shadow: ${props => props.theme.effects.shadow};   
    border-radius: ${props => props.theme.sizes.borderRadius};

    @media screen and (min-width: 1920px) {
        ${props => props.theme.sizes.cardBig}; 
    }

    

    img{
        width: 100%;
        height: 225px;
        border-top-left-radius: ${props => props.theme.sizes.borderRadius};
        border-top-right-radius: ${props => props.theme.sizes.borderRadius}; 

        

    }
    h1{
        margin-top: 16px;
        font-size: ${props => props.theme.sizes.textSubTitle};
        text-transform: capitalize;
    }
    a{
        text-decoration: underline;
        font-size: 15px;
        color: ${props => props.theme.colors.textPrimary};
        i{
            margin-left: 2px;
            font-size: 12px;
        }
    }
    
    
`;

export const Container = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Description = styled.p`
        padding: 20px 20px 0 20px;
        text-align: center;
        
`;

export const Tecnologies = styled.div`
    display: flex;
    flex-direction: row;
    grid-gap: 20px;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    margin-top: 22px;
    margin-bottom: 28px;
    width: 95%;
`;