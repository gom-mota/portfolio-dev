import styled from "styled-components";

export const Main = styled.div`
    width: 100vw;
    min-height: 100vh;
    max-width: 100%;
`;

export const Title = styled.h1`
    font-size: ${props => props.theme.sizes.textTitle};
    margin-bottom: 40px;    
    @media screen and (max-width: 960px) {
        text-align: center;
     }
`;

export const Container = styled.div`
    padding: 0 200px 0 200px;

    
    @media screen and (max-width: 1620px) {
        padding: 0 100px 0 100px;
    @media screen and (max-width: 960px) { 
        padding: 0 20px 0 20px;
    }
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
    background: ${props => props.theme.colors.accent.gradientInverted};
    width: 420px;
    height: 420px; 
    margin-right: 60px;
    border: 16px solid;
    border-image-source: ${props => props.theme.colors.accent.gradientInverted};
    border-image-slice: 1;
    box-shadow: ${props => props.theme.effects.shadow}; 

    @media screen and (max-width: 960px) {
        margin: 30px 0 40px 0;
        
        @media screen and (max-width: 520px) {
            width: 340px;
            height: 340px;
        }
    }
  }
`;

export const ProfileImage = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
`;

export const ProfileDetails = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    max-width: 660px;

    h1{
        margin-bottom: 10px;
        font-size: clamp(2.7em, 1em + 2.2vw, 3.6em);
        background: ${props => props.theme.colors.accent.gradient};
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
        width: 100%;

        p {
            text-align: center;
        }
    }
`;

export const Networks = styled.div`
    font-size: 28px;
    margin-top: 20px;    
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-gap: 20px;
    justify-content: center;

    a{
        color: ${props => props.theme.colors.textPrimary};
    }
    @media screen and (max-width: 960px) {
        display: flex;
    }
`;

export const About = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 120px;

    p{
        line-height: 32px;
    }

    @media screen and (max-width: 960px) {
        margin-top: 60px;
        p{
            text-align: center;
        }
    }

`;

export const Skills = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 80px;

    div{
        display: flex;
        flex-direction: row;
        grid-gap: 20px;
        flex-wrap: wrap;
    }
    
    @media screen and (max-width: 960px) {
        div{
            justify-content: center;
        }
    }
`;

export const ProjectCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3,auto);
    grid-gap: 20px;
    justify-content: flex-start;

    @media screen and (min-width: 1460px) {
        grid-gap: 40px;
    }

    @media screen and (max-width: 1240px) {
        display: grid;
        grid-template-columns: repeat(2,auto);
        grid-gap: 40px;
        justify-content: center;
        
        
    }
    @media screen and (max-width: 960px){
        grid-gap: 20px;
    }
    @media screen and (max-width: 760px){
        grid-gap: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        }

`;

export const Projects = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 80px;
`;

export const Experiences = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 80px;

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
        color: ${props => props.theme.colors.accent.basic};
    }

    .location{
        margin-left: 10px;
        opacity: 60%;
    }

    .summary{
        margin-top: 20px;
        margin-bottom: 10px
    }

    @media screen and (max-width: 760px){
        li{
            margin-left: 20px;
            line-height: 32px;
        }
    }

`;

export const ExperienceItem = styled.div`

margin-bottom: 20px;
     
&:after{
    content: "";    
    width: 100%;
    height: 1px;
    opacity: 12%;
    background-color: ${props => props.theme.colors.textPrimary};
    position: relative;
    display: block;
    top: 10px;
    box-shadow: ${props => props.theme.effects.shadow};
}
     
     h1{
        font-size: ${props => props.theme.sizes.textSubTitle};
    }

     div{
         margin-left: 0;
         margin-top: 20px;
         margin-bottom: 20px;
        
     }  
`;

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 120px;
    
    a{
        color: ${props => props.theme.colors.textPrimary};

        &:hover{
            opacity: 60%;
        }

        &:visited{
            color: ${props => props.theme.colors.textPrimary};
        }
    }
`;