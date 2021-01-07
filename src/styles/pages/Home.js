import styled from "styled-components";

export const Main = styled.div`
    width: 100vw;
    min-height: 100vh;
    max-width: 100%;
`;

export const Title = styled.h1`
    font-size: ${props => props.theme.sizes.textTitle};
    margin-bottom: 20px;
    
`;

export const Container = styled.div`
    padding: 0 200px 0 200px;

    
    
    @media screen and (max-width: 960px) { 
        padding: 0 40px 0 40px;
    }
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 120px;
    justify-content: center;
    align-items: center;
    
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
    box-shadow: ${props => props.theme.effects.shadow}; 

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
        font-size: 52px;
        background: ${props => props.theme.colors.gradient};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: ${props => props.theme.fonts.primary};
        font-weight: ${props => props.theme.fonts.extraBold};
    }

    p{
        font-size: ${props => props.theme.sizes.textSubTitle};
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
    font-size: 28px;
    margin-top: 20px;    
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-gap: 20px;

    a{
        color: ${props => props.theme.colors.textItem};
    }
`;

export const About = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 120px;

    p{
        line-height: 32px;
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }

`;

export const Skills = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;

    div{
        display: flex;
        flex-direction: row;
        grid-gap: 20px;
        flex-wrap: wrap;
    }    
`;

export const ProjectCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 20px;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
    }

`;

export const Projects = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
`;

export const Experiences = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;

    /*h1:nth-of-type(n+3){
        margin-top: 60px;
    }*/

    li {
        list-style-type: none;
        position:relative;
        margin-left: 40px;
        line-height: 40px;
    }

    li:before {
        content: '●';
        display: inline-block;
        position: absolute;
        left: -1.2em;
        //opacity: 0.6;
        color: ${props => props.theme.colors.primary};
    }

    .location{
        margin-left: 10px;
        opacity: 0.6;
    }

    .summary{
        margin-top: 20px;
        margin-bottom: 10px
    }
`;

export const ExperienceItem = styled.div`
     border-left: 2px solid;
     border-color: ${props => props.theme.colors.primary};
     margin-top: 60px;
     
     h1{
        font-size: ${props => props.theme.sizes.textSubTitle};
    }

     div{
         margin-left: 40px;
         margin-top: 20px;
         margin-bottom: 20px;
     }     
`;

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    min-height: 120px;
`;