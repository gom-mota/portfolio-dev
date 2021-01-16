import React, {useState} from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { TextInputButton } from '../Input';

import SimpleModal from '../Modal';

import MenuItems from './menuItems';

import {
    NavBar,
    Logo,
    NavMenu,
    MenuIcon,
    Title,
    GitConnected
} from './styles';

const Navbar = () => {

    function sendURL() {
        return (
        alert("Ainda não implementado. Use a versão de desktop")
        )
        
      }

    const [buttonClicked, setButtonClicked] = useState(true);

    function handleClick() {
        setButtonClicked(!buttonClicked);
    }

    const [url, setUrl] = useState('');

    const onChange = (e) => {
        setUrl(e.target.value)
    }

    return (        <NavBar className={buttonClicked ? 'active' : ''}>

            <Logo>
                <h1>GM</h1>
            </Logo>

            <Title>
                <a href="/">
                    Portfolio <span>DEV_</span>
                </a>
            </Title>
            
            <MenuIcon onClick={handleClick}>
                {buttonClicked ?  <FaBars /> : <FaTimes />}
            </MenuIcon>

            <NavMenu className={buttonClicked ? '' : 'active'}>
            {MenuItems.map((item, index) => {
                return(
                    <li key={index}>
                        {
                        item.cName=="mobile"?
                        <a className={item.cName} onClick={sendURL}>{item.title}</a>
                        :
                        <a className={item.cName} href={item.url}>{item.title}</a>
                }
                    </li>
                )
            })}
            </NavMenu>
            
            <GitConnected>
                <TextInputButton placeholder="URL da API Gitconnected" value={url} onChange={onChange} button="Carregar CV" link={`?apiurl=${url}`}/>
            </GitConnected>

            

        </NavBar>
    );
  };
  
  export default Navbar;