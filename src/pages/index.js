import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { withRouter } from 'next/router';
import Badge from '../components/Badge';
import Card from '../components/Card';

import { FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaUnlink,
  FaInfinity
} from 'react-icons/fa';

import {
  Main,
  Container,
  Profile,
  ProfileDetails,
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

  function validateAPI(url){
    const pattern = new RegExp("(https{0,1}:\/\/w{0,3}gitconnected.com\/v1\/portfolio\/.*)");
    if (pattern.test(url)==true){
        return true;
    }
    else{
      alert("Insira um link válido da API Gitconnected!");
        return false;
    }
    
  }

  const [user, setUser] = useState(null);

  useEffect(() => {

    if(router.query.apiurl!=null && validateAPI(router.query.apiurl)==true){
      
    fetch(router.query.apiurl)
      .then(res => res.text())
      .then(text => {

        try {
          const data = JSON.parse(text);
            if(data.statusCode==500){
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
      fetch('https://gitconnected.com/v1/portfolio/gom-mota')
            .then(res => res.json())
            .then(user => {
              setUser(user);
            });
    }
  }, [router.query.apiurl]);

  function getUrlImg(index){
    var url="https://maestroselectronics.com/wp-content/uploads/2017/12/No_Image_Available.jpg";
    user.projects[index].images.map((image) => {
        url=(image.resolutions.desktop.url);
    });
    return url;
}

  function selectIcon(network){
    switch(network){
      case 'gitconnected':
        return <FaInfinity/>
      case 'GitHub':
        return <FaGithub />
      case 'LinkedIn':
        return <FaLinkedin />
      case 'Twitter':
        return <FaTwitter />
      default: 
        return <FaUnlink />;
    }
  }

  if (!user) {
    return <div />;
  }

  return (
    <Main>
      <Navbar />
      <Container>
        <Profile>
          <img src={user.basics.picture} />
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
          <Title>Sobre mim</Title>
          <p>{user.basics.summary}</p>
        </About>
        <Skills>
          <Title>Habilidades</Title>
          <div>
            {user.skills.map((skill, i) => (
              <Badge>{skill.name}</Badge>
            ))}
          </div>
        </Skills>
        <Projects>
          <Title>Projetos</Title>
          <ProjectCards>
            {user.projects.map((project, i) => (
              <Card img={getUrlImg(i)}
                    name={project.name}
                    url={project.url}
                    description={project.description}
                    languages={project.languages}
              />
            ))}
          </ProjectCards>
        </Projects>
        <Experiences>
              <Title>Experiência</Title>
              {user.work.map((work, i) => (
                <ExperienceItem>
                  <div>
                    <h1>{work.name}</h1>
                    <p>
                      {work.position} <span className="location">{work.location}</span>
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
          <p>&copy; Gabriel Mota 2020</p>
        </Footer>
    </Main>
  );
}

export default withRouter(Home);