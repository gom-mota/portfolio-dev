import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { withRouter } from 'next/router';
import Badge from '../components/Badge';
import Card from '../components/Card';
import ScrollArrow from '../components/ScrollArrow';
import { useThemeMode } from '../contexts/themeContext';
import { ToggleThemeMode } from '../components/Toggle';

import { FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaUnlink,
  FaInfinity,
  FaStackOverflow,
  FaYoutube,
  FaMedium,
  FaReddit,
  FaHackerrank,
  FaChartLine,
  FaFacebook,
  FaAngellist,
  FaQuora,
  FaBehance,
  FaDribbble,
  FaTwitch,
  FaVimeo
} from 'react-icons/fa';

import {
  Main,
  Container,
  Profile,
  ProfileDetails,
  ProfileImage,
  Networks,
  About,
  Skills,
  Projects,
  ProjectCards,
  Title,
  Experiences,
  ExperienceItem,
  Footer
} from '../styles/pages/Home';

const Home = ({router}) => {

  // Informe o link de sua API
  const linkAPI="https://gitconnected.com/v1/portfolio/gom-mota";

  function validateAPI(url){
    const regex = /^(?:https?:\/\/)?(w{3}gitconnected.com\/v1\/portfolio\/.*\.)?[\w_-]+((\.\w{2,}){1,2})(\/([\w\._-]+\/?)*(\?[\w_-]+=[^\?\/&]*(\&[\w_-]+=[^\?\/&]*)*)?)?$/gm;
    const pattern = new RegExp(regex);
    if (pattern.test(url)==true){
        return true;
    }
    else{
      alert("Insira um link válido da API Gitconnected!");
      return false;
    }
    
  }

  // User data
  const [user, setUser] = useState(null);

  useEffect(() => {

    if(router.query.apiurl!=null && validateAPI(router.query.apiurl)==true){
      
    fetch(router.query.apiurl)
      .then(res => res.text())
      .then(text => {

        try {
          const data = JSON.parse(text);
            if(data.hasOwnProperty("statusCode")){
              alert("Usuário não encontrado no Gitconnected!");
            }else{
              setUser(data);
            }
        }
        catch(err) {
          alert("Erro");
        }

      })
    }
    else{
      fetch(linkAPI)
            .then(res => res.json())
            .then(user => {
              setUser(user);
            });
    }
  }, [router.query.apiurl]);

  // User project data image
  function getUrlImg(index){
    var url="https://maestroselectronics.com/wp-content/uploads/2017/12/No_Image_Available.jpg";
    user.projects[index].images.map((image) => {
        url=(image.resolutions.desktop.url);
    });
    return url;
}

  // User's networks data icon
  function selectIcon(network){
    switch(network){
      case 'gitconnected':
        return <FaInfinity />
      case 'GitHub':
        return <FaGithub />
      case 'LinkedIn':
        return <FaLinkedin />
      case 'Twitter':
        return <FaTwitter />
      case 'Stack Overflow':
        return <FaStackOverflow />
      case 'Youtube':
        return <FaYoutube />
      case 'Medium':
        return <FaMedium />
      case 'Reddit':
        return <FaReddit />
      case 'HackerRank':
        return <FaHackerrank />
      case 'Topcoder':
        return <FaChartLine />
      case 'Facebook':
        return <FaFacebook />
      case 'AngelList':
        return <FaAngellist />
      case 'Quora':
        return <FaQuora />
      case 'Behance':
        return <FaBehance />
      case 'Dribbble':
        return <FaDribbble />
      case 'Twitch':
        return <FaTwitch />
      case 'Vimeo':
        return <FaVimeo />
      default: 
        return <FaUnlink />;
    }
  }

  const { theme, toggleTheme } = useThemeMode();

  if (!user) {
    return <div />;
  }

  return (
    <Main>
      <ScrollArrow/>
      <Navbar />
      <Container>
      
        <Profile>
          <ProfileImage>
            <ToggleThemeMode theme={theme} toggleTheme={toggleTheme} />
            <img src={user.basics.picture}/>
          </ProfileImage>
            <ProfileDetails>
              <Title>{user.basics.name}</Title>
              <p>{user.basics.label}</p>
              {
                user.basics.email!=""?
                <p>
                  <FaEnvelope /> {user.basics.email}
                </p>
                :null
              }
              {
                user.basics.phone!=""?
                <p>
                  <FaPhoneAlt /> {user.basics.phone}
                </p>
                :null
              }
              <Networks>
                {user.basics.profiles.map((profile, i) => (
                  <a href={profile.url} target="_blank" Title={profile.network}>
                    {selectIcon(profile.network)}
                  </a>
                ))}
              </Networks>
            </ProfileDetails>
        </Profile>
        <About>
          <Title id="about">Sobre mim</Title>
          <p>{user.basics.summary}</p>
        </About>
        <Skills>
          <Title>Conhecimentos</Title>
          <div>
            {user.skills.map((skill, i) => (
              <Badge>{skill.name}</Badge>
            ))}
          </div>
        </Skills>
        <Projects>
          <Title id="projects">Projetos</Title>
          <ProjectCards>
            {user.projects.map((project, i) => (
              <Card img={getUrlImg(i)}
                    name={project.name}
                    url={project.url}
                    description={project.description}
                    subtitle="Tecnologias"
                    languages={project.languages}
                    libraries={project.libraries}
              />
            ))}
          </ProjectCards>
        </Projects>
        <Experiences>
              <Title id="experiences">Experiências</Title>
              {user.work.map((work, i) => (
                <ExperienceItem>
                  <div>
                    <h1>{work.name}</h1>
                    <p>
                      {work.position}<span className="location">- {work.location}</span>
                    </p>
                    <p className="summary">{work.summary}</p>
                    <ul>
                      {user.work[i].highlights.map((highlight) =>(
                        <li>{highlight}</li>
                      ))}
                    </ul>
                    </div>
                </ExperienceItem>
              ))}
        </Experiences>
        </Container>
        <Footer>
          <div>Criado por <a href="https://github.com/gom-mota/">Gabriel Mota</a>.</div>
        </Footer>
    </Main>
  );
}

export default withRouter(Home);