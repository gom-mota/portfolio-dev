import styled from 'styled-components';

export const Main = styled.div`

    .layer {
      width: 100%;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
      background-color: #000000cf;
    }
`;

export const NavBar = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  margin-top: 20px;


  @media screen and (max-width: 960px) { 
    position: relative;
    margin:0;

    &.active {
      background: ${props => props.theme.colors.backgroundItem};
    }
  }
`;

export const Logo = styled.div`
  border-radius: 100%;
  background: ${props => props.theme.colors.accent.gradientInverted};
  padding: 10px; 
  box-shadow: ${props => props.theme.effects.shadow}; 

   h1 {
    font-size: 20px;
    color: ${props => props.theme.colors.textButton};
   }

  @media screen and (max-width: 960px) {  
    display: none;    
  }
`;

export const Title = styled.div`
  margin-left: 20px;

  a {
    text-decoration: none;
    font-size:22px;
    color: ${props => props.theme.colors.textPrimary};
    cursor: pointer;
    font-weight: ${props => props.theme.fonts.light};
    display: flex;
  }

  span {
    font-family: Reenie Beanie, cursive;
    font-size: 32px;
    letter-spacing: 2px;
  }

  @media screen and (max-width: 960px) {
    margin:0;
  }
`;

export const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 30px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;

  a {
    color: ${props => props.theme.colors.textPrimary};
    text-decoration: none;
    margin: 0.5rem 1rem;
    font-family: ${props => props.theme.fonts.primary};
    font-weight: ${props => props.theme.fonts.regular};

    &:hover {
      transition: all 0.2s ease-out;
      opacity: 60%;
    }

    &.mobile {
      display: none;
    }
  }
  @media screen and (max-width: 1100px) {
    a{
      margin: 0;
    }

    @media screen and (max-width: 960px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      grid-gap: 8px;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 1;

    &.active {
      background: ${props => props.theme.colors.background};
      left: 0;
      opacity: 1;
      z-index: 1;
    }

    li{
      cursor: pointer;
    }

      a {
        text-align: center;
        margin: 0 0;
        padding: 1.5rem;
        width: 100%;
        display: table;
        
        &:hover {
          opacity: 70%;
        }

        &.mobile {
          display: block;
          text-align: center;
          padding: ${props => props.theme.sizes.buttonLarge};
          margin: 2rem auto;
          border-radius: ${props => props.theme.sizes.borderRadius};
          width: 50%;
          font-weight: ${props => props.theme.fonts.medium};
          background: ${props => props.theme.colors.accent.gradient};
          text-decoration: none;
          color: ${props => props.theme.colors.textButton};
          font-size: ${props => props.theme.sizes.textPrimary};
        }
        
        &.mobile:hover {
          opacity: 1;
        }
      }
    }
  }
`;



export const MenuIcon = styled.div`
  display: none;
  color: ${props => props.theme.colors.textPrimary};

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 6px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.4rem;
    cursor: pointer;
  }
`;

export const GitConnected = styled.div`
  display: flex;

  @media screen and (max-width: 960px) {
    display: none;
   }
`;
