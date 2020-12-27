import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { withRouter } from 'next/router';

import { FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaUnlink,
  FaInfinity
} from 'react-icons/fa';

import {
  Container,
  MainContainer,
  Profile,
  ProfileDetails,
  Networks
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
            if(data.statusCode==404){
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
    <MainContainer>
      <Navbar />
      <Container>
        <Profile>
          <img src={user.basics.picture} />
            <ProfileDetails>
              <h1>{user.basics.name}</h1>
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
                  <a href={profile.url} target="_blank" title={profile.network}>
                    {selectIcon(profile.network)}
                  </a>
                ))}
              </Networks>
            </ProfileDetails>
        </Profile>
      </Container>
    </MainContainer>
  );
}

export default withRouter(Home);