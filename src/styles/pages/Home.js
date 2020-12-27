import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;    
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    
    @media screen and (max-width: 960px) {  
        flex-direction: column;
        margin:0;
    }
  
  img{
    border-radius: 100%;
    background: ${props => props.theme.colors.gradient};
    width: 420px;
    height: 420px; 
    margin-right: 60px;
    border: 16px solid;
    border-image-source: ${props => props.theme.colors.gradient};
    border-image-slice: 1;

    @media screen and (max-width: 960px) {
        margin: 30px 0 50px 0;
    }
  }
`;

export const ProfileDetails = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;

    h1{
        font-size: 54px;
        background: ${props => props.theme.colors.gradient};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: ${props => props.theme.fonts.primary};
        font-weight: ${props => props.theme.fonts.extraBold};
    }

    p{
        font-size: ${props => props.theme.sizes.textTitle};
        line-height: 50px;
        align-items: center;
        display: flex;

        *{
            margin-right: 10px;
        }
    }

    @media screen and (max-width: 960px) {
        align-items: center;
    }
`;

export const Networks = styled.div`
    font-size: 2rem;
    margin-top: 20px;    
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-gap: 20px;

    a{
        color: ${props => props.theme.colors.textItem};
    }
`;